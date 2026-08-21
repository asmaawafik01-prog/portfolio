import styles from './ComponentShowcase.module.css'

export default function ComponentShowcase({
  src,
  alt,
  maxWidth = 460,
}: {
  src: string
  alt: string
  maxWidth?: number
}) {
  return (
    <div className={styles.card} style={{ maxWidth, margin: '0 auto' }}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}
