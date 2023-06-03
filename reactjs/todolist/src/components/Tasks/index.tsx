import { useEffect } from 'react'
import EmptyTasks from '../EmptyTasks'
import NewTask from '../NewTask'
import Task from '../Task'
import Counter from './Counter'
import styles from './Tasks.module.css'
import { useTasks } from '../../hooks/useTasks'

export default function Tasks() {
  const {
    tasks,
    setTasks,
    completedTasks,
    handleCreateTask,
    handleDeleteTask,
    handleOnCheck,
  } = useTasks()

  useEffect(() => {
    const json = localStorage.getItem('tasks')
    if (json) {
      const localStorageTasks = JSON.parse(json)
      if (localStorageTasks.length) setTasks(localStorageTasks)
    }
  }, [setTasks])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <NewTask handleCreateTask={handleCreateTask} />
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.created}>
            Tasks created <Counter count={tasks.length} />
          </div>
          <div className={styles.done}>
            Completed <Counter count={`${completedTasks} of ${tasks.length}`} />
          </div>
        </div>

        {tasks.length === 0 && <EmptyTasks />}
        {tasks && (
          <div className={styles.tasks}>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isDone={task.isDone}
                  handleOnCheck={handleOnCheck}
                  handleDeleteTask={handleDeleteTask}
                />
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
