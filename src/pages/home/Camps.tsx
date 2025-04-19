
function Camps() {
  return (
    <section id="camps" className="camps">
        <div className="container">
            <h2>Tabere</h2>
            <div className="camps-carousel">
                <button className="carousel-btn prev-btn" aria-label="Tabere anterioare">❮</button>
                <div className="camps-container">
                    <div className="camps-grid" id="campsGrid">
                        {/* <!-- Taberele vor fi inserate dinamic aici --> */}
                    </div>
                </div>
                <button className="carousel-btn next-btn" aria-label="Tabere următoare">❯</button>
            </div>
        </div>
    </section>

  )
}

export default Camps