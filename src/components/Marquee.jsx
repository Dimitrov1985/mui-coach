const ITEM = 'Strength ✦ Conditioning ✦ Nutrition ✦ Mobility ✦ Recovery ✦ Transformation ✦ '

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...Array(4)].map((_, i) => (
          <div className="marquee__item" key={i}>{ITEM}</div>
        ))}
        {[...Array(4)].map((_, i) => (
          <div className="marquee__item" key={`b${i}`}>{ITEM}</div>
        ))}
      </div>
    </div>
  )
}
