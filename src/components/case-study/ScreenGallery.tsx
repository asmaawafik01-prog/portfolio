import type { ComponentType } from 'react'
import PhoneFrame from './PhoneFrame'
import styles from './ScreenGallery.module.css'

export interface GalleryScreen {
  src: string
  step: string
  caption: string
  ratio?: number
}

type FrameProps = { src: string; alt: string; ratio?: number }

export default function ScreenGallery({
  screens,
  Frame = PhoneFrame,
  wide,
}: {
  screens: GalleryScreen[]
  Frame?: ComponentType<FrameProps>
  /** For landscape/web screenshots — fewer, larger columns. */
  wide?: boolean
}) {
  return (
    <div className={`${styles.grid} ${wide ? styles.gridWide : ''}`}>
      {screens.map((screen) => (
        <div className={styles.item} key={screen.src}>
          <Frame
            src={screen.src}
            alt={`${screen.step}: ${screen.caption}`}
            ratio={screen.ratio}
          />
          <p className={styles.caption}>
            <strong>{screen.step}</strong>
            {screen.caption}
          </p>
        </div>
      ))}
    </div>
  )
}
