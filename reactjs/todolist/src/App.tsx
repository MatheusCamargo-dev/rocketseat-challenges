import './global.css'
import Header from './components/Header'
import styles from './App.module.css'
import Tasks from './components/Tasks'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Tasks />
      </div>
    </div>
  )
}

export default App
