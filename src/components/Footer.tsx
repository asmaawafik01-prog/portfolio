import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>&copy; {year} Asmaa Wafik. All rights reserved.</p>
        <div className={styles.links}>
          <a href="mailto:asmaawafik01@gmail.com">asmaawafik01@gmail.com</a>
          <a href="https://www.linkedin.com/in/asmaa-wafik-598625243" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
