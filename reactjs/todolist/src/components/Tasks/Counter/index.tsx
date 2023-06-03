import styles from '../Tasks.module.css'

export default function Counter({ count }: { count: number | string }) {
  return <span className={styles.counter}>{count}</span>
}
