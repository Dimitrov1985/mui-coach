export default function Marquee() {
  const text = 'Strength ✦ Conditioning ✦ Nutrition ✦ Mobility ✦ Recovery ✦ Transformation ✦ '
  const repeated = text.repeat(6)

  return (
    <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '24px 0', overflow: 'hidden' }}>
      <div className="marquee__track" style={{ display: 'flex', gap: 60, whiteSpace: 'nowrap', width: 'max-content' }}>
        <span style={{ fontFamily: 'var(--font-anton)', fontSize: 28, letterSpacing: '.1em', textTransform: 'uppercase' }}>
          {repeated}
        </span>
        <span style={{ fontFamily: 'var(--font-anton)', fontSize: 28, letterSpacing: '.1em', textTransform: 'uppercase' }}>
          {repeated}
        </span>
      </div>
    </div>
  )
}
