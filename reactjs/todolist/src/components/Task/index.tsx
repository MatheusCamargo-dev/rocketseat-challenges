import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export interface TaskProps {
  id: string
  title: string
  isDone?: boolean
}

interface TaskComponent {
  id: string
  title: string
  isDone?: boolean
  handleOnCheck: (id: string) => void
  handleDeleteTask: (id: string) => void
}
export default function Task({
  id,
  title,
  isDone = false,
  handleOnCheck,
  handleDeleteTask,
}: TaskComponent) {
  function onHandleOnCheck() {
    handleOnCheck(id)
  }

  function onHandleDeleteTask() {
    handleDeleteTask(id)
  }
  return (
    <div className={styles.task}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          onChange={onHandleOnCheck}
          name={id}
          id={id}
          checked={isDone}
        />
        <span className={styles.checkmark}></span>
      </label>
      <p className={isDone ? styles.isDone : styles.notIsDone}>{title}</p>
      <Trash size={16} onClick={onHandleDeleteTask} />
    </div>
  )
}
