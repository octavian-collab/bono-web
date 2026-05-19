const TEAM = [
  { initials: 'B', name: 'Bogdan', role: 'Founder & CEO' },
  { initials: 'C', name: 'Cristi', role: 'Product Manager' },
  { initials: 'A', name: 'Alexandra', role: 'COO' },
  { initials: 'B', name: 'Bogdan', role: 'CTO' },
  { initials: 'C', name: 'Chris', role: 'Head of Product' },
  { initials: 'V', name: 'Vlad', role: 'Senior Software Developer' },
  { initials: 'R', name: 'Raluca', role: 'Economist' },
  { initials: 'O', name: 'Octav', role: 'UX Designer' },
  { initials: 'A', name: 'Adrian', role: 'Software Engineer' },
]

export default function Team() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 48 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            Echipa
          </div>
          <h2 className="t-h1">
            Oameni <em>reali</em> în spatele platformei.
          </h2>
        </div>
        <div className="team-grid">
          {TEAM.map(({ initials, name, role }) => (
            <div key={name} className="team-member">
              <div className="team-photo">
                <div className="team-photo-placeholder">
                  <div className="avatar lg" style={{ width: '100%', height: '100%', borderRadius: 0, fontSize: 22 }}>
                    {initials}
                  </div>
                </div>
              </div>
              <h3 className="t18">{name}</h3>
              <p className="t14">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
