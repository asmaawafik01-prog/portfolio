import styles from './FlowSteps.module.css'

export default function FlowSteps({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div className={styles.flow}>
      <span className={styles.label}>{label}</span>
      <div className={styles.row}>
        {steps.map((step, i) => (
          <span key={step} style={{ display: 'contents' }}>
            {i > 0 && <span className={styles.arrow}>→</span>}
            <span className={styles.step}>{step}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
