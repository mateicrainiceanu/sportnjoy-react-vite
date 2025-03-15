
function Activities() {
  return (
     <section id="activities" className="activities">
        <div className="container">
            <h2>Activitățile noastre</h2>
            <div className="activities-grid">
                <div className="activity-card skiing">
                    <div className="activity-image">
                        <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Schi"/>
                    </div>
                    <div className="activity-content">
                        <h3>Tabere de schi</h3>
                        <p>Experimentează emoția schiului cu instructorii noștri experți. De la începători până la avansați, oferim instruire personalizată pentru toate nivelurile.</p>
                        <ul className="activity-features">
                            <li>Instructori profesioniști</li>
                            <li>Toate nivelurile sunt binevenite</li>
                            <li>Echipament disponibil</li>
                            <li>Lecții de grup și individuale</li>
                        </ul>
                        <a href="#pricing" className="btn btn-secondary">Vezi prețurile</a>
                    </div>
                </div>

                <div className="activity-card crossfit">
                    <div className="activity-image">
                        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CrossFit"/>
                    </div>
                    <div className="activity-content">
                        <h3>CrossFit</h3>
                        <p>Depășește-ți limitele cu antrenamentele noastre CrossFit. Dezvoltă-ți forța, rezistența și comunitatea în facilitățile noastre moderne.</p>
                        <ul className="activity-features">
                            <li>Antrenori CrossFit certificați</li>
                            <li>Echipament modern</li>
                            <li>Antrenamente adaptabile</li>
                            <li>Ghidare nutrițională</li>
                        </ul>
                        <a href="#pricing" className="btn btn-secondary">Vezi prețurile</a>
                    </div>
                </div>

                <div className="activity-card bootcamp">
                    <div className="activity-image">
                        <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Bootcamp"/>
                    </div>
                    <div className="activity-content">
                        <h3>Bootcamp-uri</h3>
                        <p>Alătură-te sesiunilor noastre de bootcamp în aer liber pentru un antrenament complet care combină cardio, forță și exerciții de echipă.</p>
                        <ul className="activity-features">
                            <li>Antrenament în aer liber</li>
                            <li>Antrenamente de echipă</li>
                            <li>Toate nivelurile de fitness</li>
                            <li>Evaluări regulate</li>
                        </ul>
                        <a href="#pricing" className="btn btn-secondary">Vezi prețurile</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Activities