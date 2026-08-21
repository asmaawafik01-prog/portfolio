import styles from './ModuleDiagram.module.css'

const modules = [
  { cx: 115, x: 10, title: 'Sales', lines: ['→ Customer'] },
  { cx: 345, x: 240, title: 'Purchase', lines: ['→ Vendor'] },
  { cx: 575, x: 470, title: 'Accounting', lines: ['→ Chart of Accounts'] },
  { cx: 805, x: 700, title: 'Finance', lines: ['Treasury · Bank ·', 'Payment Terms · Methods'] },
]

export default function ModuleDiagram() {
  return (
    <div className={styles.wrap}>
      <svg className={styles.svg} viewBox="0 0 920 340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker
            id="module-arrow"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" className={styles.arrow} style={{ fill: 'var(--navy-bright)', stroke: 'none' }} />
          </marker>
        </defs>

        {modules.map((m) => (
          <path
            key={m.title}
            d={`M${m.cx},110 C${m.cx},185 460,185 460,250`}
            className={styles.arrow}
            markerEnd="url(#module-arrow)"
          />
        ))}

        {modules.map((m) => (
          <g key={m.title}>
            <rect x={m.x} y={20} width={210} height={90} rx={12} className={styles.moduleBox} />
            <text x={m.cx} y={m.lines.length > 1 ? 48 : 58} textAnchor="middle" className={styles.title}>
              {m.title}
            </text>
            {m.lines.map((line, i) => (
              <text
                key={line}
                x={m.cx}
                y={(m.lines.length > 1 ? 68 : 78) + i * 16}
                textAnchor="middle"
                className={styles.sub}
              >
                {line}
              </text>
            ))}
          </g>
        ))}

        <rect x={230} y={250} width={460} height={76} rx={12} className={styles.paymentBox} />
        <line x1={460} y1={250} x2={460} y2={326} className={styles.divider} />

        <text x={345} y={282} textAnchor="middle" className={styles.paymentTitle}>
          Payment In
        </text>
        <text x={345} y={302} textAnchor="middle" className={styles.sub}>
          Money received
        </text>
        <text x={345} y={317} textAnchor="middle" className={styles.sub}>
          e.g. from a customer
        </text>

        <text x={575} y={282} textAnchor="middle" className={styles.paymentTitle}>
          Payment Out
        </text>
        <text x={575} y={302} textAnchor="middle" className={styles.sub}>
          Money paid out
        </text>
        <text x={575} y={317} textAnchor="middle" className={styles.sub}>
          e.g. to a vendor
        </text>
      </svg>
    </div>
  )
}
