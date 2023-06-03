import { useState } from 'react'
import { TaskProps } from '../components/Task'

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const completedTasks = tasks.reduce((acc, task) => {
    if (task.isDone) acc++
    return acc
  }, 0)

  function handleCreateTask(task: TaskProps) {
    if (task.title.length) setTasks((tasks) => [...tasks, task])
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  function handleOnCheck(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone
      }

      return task
    })
    setTasks(newTasks)
  }

  return {
    tasks,
    setTasks,
    completedTasks,
    handleCreateTask,
    handleDeleteTask,
    handleOnCheck,
  }
}
