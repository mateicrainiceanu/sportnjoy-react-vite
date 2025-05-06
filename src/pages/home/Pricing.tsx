
function Pricing() {
  return (
    <section id="pricing" className="pricing">
        <div className="container">
            <h2>Planuri de Prețuri</h2>
            
            <div className="pricing-section">
                <h3 className="pricing-section-title">Abonamente Lunare</h3>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h3>OPEN GYM</h3>
                        <div className="price">200 Lei<span>/lună</span></div>
                        <ul>
                            <li>Acces complet</li>
                            <li>Toate echipamentele disponibile</li>
                            <li>Acces la vestiar</li>
                            <li>Program flexibil</li>
                        </ul>
                        <a href="instructions" className="btn btn-primary">Începe acum</a>
                    </div>
                    <div className="pricing-card featured">
                        <h3>FITNESS GROUP</h3>
                        <div className="price">600 Lei<span>/lună</span></div>
                        <ul>
                            <li>Acces complet</li>
                            <li>Cursuri de grup nelimitate</li>
                            <li>Toate echipamentele disponibile</li>
                            <li>Acces la vestiar</li>
                        </ul>
                        <a href="instructions" className="btn btn-primary">Începe acum</a>
                    </div>
                    <div className="pricing-card">
                        <h3>PERSONAL TRAINING</h3>
                        <div className="price">1500 Lei<span>/lună</span></div>
                        <ul>
                            <li>Acces complet</li>
                            <li>Antrenor personal</li>
                            <li>Plan de antrenament personalizat</li>
                            <li>Ghidare nutrițională</li>
                        </ul>
                        <a href="instructions" className="btn btn-primary">Începe acum</a>
                    </div>
                </div>
            </div>

            <div className="pricing-section">
                <h3 className="pricing-section-title">Intrari Zilnice</h3>
                <div className="pricing-grid daily-plans">
                    <div className="pricing-card">
                        <h3>ONE DAY GYM</h3>
                        <div className="price">30 Lei<span>/zi</span></div>
                        <ul>
                            <li>Acces complet</li>
                            <li>Toate echipamentele disponibile</li>
                            <li>Acces la vestiar</li>
                            <li>Pas pentru o zi</li>
                        </ul>
                        <a href="instructions" className="btn btn-primary">Începe acum</a>
                    </div>
                    <div className="pricing-card">
                        <h3>ONE DAY FITNESS GROUP</h3>
                        <div className="price">60 Lei<span>/zi</span></div>
                        <ul>
                            <li>Acces complet</li>
                            <li>Cursuri de fitness de grup</li>
                            <li>Toate echipamentele disponibile</li>
                            <li>Acces la vestiar</li>
                        </ul>
                        <a href="instructions" className="btn btn-primary">Începe acum</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing