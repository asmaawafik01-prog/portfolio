import styles from './OwnershipGrid.module.css'

export interface OwnershipItem {
  index: string
  verb: string
  text: string
}

export default function OwnershipGrid({ items }: { items: OwnershipItem[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div className={styles.card} key={item.index}>
          <span className={styles.num}>{item.index}</span>
          <h3 className={styles.verb}>{item.verb}</h3>
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  )
}
