
function Instructions() {
  return (
        <section className="instructions-page">
        <div className="instructions-container">
            <img src="images/upfit.png" alt="UPfit.today Logo" className="instructions-logo"/>
            
            <h1 className="instructions-title">DESCARCĂ GRATUIT APLICAȚIA NOASTRĂ DEDICATĂ PENTRU MEMBRI!</h1>
            
            <p className="instructions-text">
                Ai direct pe telefonul tău acces la toate informațiile, îți faci rapid rezervări la clase și îți cumperi abonament online plătind cu card bancar.
            </p>

            <div className="app-links">
                <a href="https://play.google.com/store/search?q=upfit.today&c=apps" className="app-store-btn" target="_blank">
                    <img src="https://play.google.com/intl/en_us/badges/images/generic/ro_badge_web_generic.png" alt="Descarcă din Google Play"/>
                </a>
                <a href="https://apps.apple.com/ro/app/upfit-today/id1440017892" className="app-store-btn" target="_blank">
                    <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Descarcă din App Store"/>
                </a>
            </div>

            <p className="instructions-text">Descarcă aplicația UPfit.today și introdu codul unic:</p>
            
            <div className="code-box">
                <div className="code">SPORTNJOY</div>
            </div>

            <a href="https://upfit.today/" className="website-link" target="_blank">
                Vizitează UPfit.today
            </a>
        </div>
    </section>
  )
}

export default Instructions