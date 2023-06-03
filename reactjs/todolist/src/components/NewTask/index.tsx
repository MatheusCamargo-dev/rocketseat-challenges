import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { ChangeEvent, useState } from 'react'
import { TaskProps } from '../Task'

interface NewTaskProps {
  handleCreateTask: (task: TaskProps) => void
}
export default function NewTask({ handleCreateTask }: NewTaskProps) {
  const [text, setText] = useState('')

  function onHandleCreateTask() {
    const task: TaskProps = {
      id: crypto.randomUUID(),
      title: text,
      isDone: false,
    }

    handleCreateTask(task)
    setText('')
  }
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={text}
        onInput={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={onHandleCreateTask}>
        Create <PlusCircle size={16} />
      </button>
    </div>
  )
}
