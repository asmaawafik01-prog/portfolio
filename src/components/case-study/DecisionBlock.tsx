import type { ComponentType } from 'react'
import PhoneFrame from './PhoneFrame'
import styles from './DecisionBlock.module.css'

export interface DecisionImage {
  src: string
  alt: string
  ratio?: number
}

type FrameProps = { src: string; alt: string; ratio?: number }

export default function DecisionBlock({
  index,
  title,
  text,
  images,
  Frame = PhoneFrame,
}: {
  index: string
  title: string
  text: string
  images: DecisionImage[]
  Frame?: ComponentType<FrameProps>
}) {
  return (
    <div className={styles.block}>
      <div>
        <span className={styles.num}>{index}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.images} style={{ ['--count' as string]: images.length }}>
        {images.map((img) => (
          <Frame key={img.src} src={img.src} alt={img.alt} ratio={img.ratio} />
        ))}
      </div>
    </div>
  )
}
