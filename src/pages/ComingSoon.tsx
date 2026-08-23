import { Link } from 'react-router-dom'

export default function ComingSoon({
  title,
  eyebrow = 'Coming soon',
  message = 'This page is being built next. Check back shortly.',
}: {
  title: string
  eyebrow?: string
  message?: string
}) {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
        <span className="eyebrow">{eyebrow}</span>
        <h1 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, marginTop: 12 }}>
          {title}
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: 14, fontSize: 16 }}>
          {message}
        </p>
        <Link to="/" className="btn-secondary" style={{ marginTop: 28, display: 'inline-flex' }}>
          ← Back home
        </Link>
      </div>
    </section>
  )
}
