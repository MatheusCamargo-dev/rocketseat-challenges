import styles from './EmptyTasks.module.css'

export default function EmptyTasks() {
  return (
    <div className={styles.empty}>
      <img src="/src/assets/clipboard.png" alt="clipboard" />
      <p>
        <strong> You still don&apos;t have tasks registered </strong>
        <br />
        Create tasks and organize your
      </p>
    </div>
  )
}
