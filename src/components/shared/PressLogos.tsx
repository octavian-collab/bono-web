const PRESS = [
  'Forbes România',
  'StartUp.ro',
  'Ziarul Financiar',
  'Wall-Street.ro',
]

interface PressLogosProps {
  className?: string
}

export default function PressLogos({ className }: PressLogosProps) {
  return (
    <div className={`press-row ${className ?? ''}`}>
      <span className="press-label">Apărut în</span>
      {PRESS.map((name) => (
        <span key={name} className="press-logo">{name}</span>
      ))}
    </div>
  )
}
