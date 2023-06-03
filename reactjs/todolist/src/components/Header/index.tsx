import styles from './Header.module.css'
import Logo from '../../../src/assets/logo.svg'
export default function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="TodoLogo" />
    </div>
  )
}
