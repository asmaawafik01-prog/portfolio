import styles from './ToolsMarquee.module.css'

export interface Tool {
  name: string
  /** One or two letters shown on the tile. */
  mark: string
}

// Four copies, so the track is always wider than its box and can loop by half its width.
const COPIES = 4

function Row({ tools, reverse }: { tools: Tool[]; reverse?: boolean }) {
  return (
    <div className={styles.row}>
      <ul className={`${styles.track}${reverse ? ` ${styles.reverse}` : ''}`}>
        {Array.from({ length: COPIES }, (_, copy) =>
          tools.map((tool) => (
            <li
              key={`${copy}-${tool.name}`}
              className={copy ? styles.copy : undefined}
              aria-hidden={copy ? true : undefined}
            >
              <span className={styles.tile} aria-hidden="true">
                {tool.mark}
              </span>
              <span className={styles.name}>{tool.name}</span>
            </li>
          )),
        )}
      </ul>
    </div>
  )
}

/** Two rows of tool tiles drifting in opposite directions; pauses on hover. */
export default function ToolsMarquee({ tools }: { tools: Tool[] }) {
  const half = Math.ceil(tools.length / 2)
  return (
    <div className={styles.box}>
      <Row tools={tools.slice(0, half)} />
      <Row tools={tools.slice(half)} reverse />
    </div>
  )
}
