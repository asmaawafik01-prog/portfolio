import styles from './TagList.module.css'

export default function TagList({
  items,
  tone = 'neutral',
}: {
  items: string[]
  /** 'neutral' for problems/issues, 'accent' for improvements/outcomes. */
  tone?: 'neutral' | 'accent'
}) {
  return (
    <ul className={`${styles.list} ${tone === 'accent' ? styles.accent : ''}`}>
      {items.map((item) => (
        <li className={styles.pill} key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
