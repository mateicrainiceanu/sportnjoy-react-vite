
function Contact() {
  return (
    <section id="contact" className="contact">
        <div className="container">
            <h2>Contactează-ne</h2>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <div className="contact-header">
                        <h3>Informații de Contact</h3>
                        <p>Suntem aici pentru tine! Contactează-ne prin oricare din următoarele metode:</p>
                    </div>
                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="contact-icon">📍</div>
                            <div className="contact-details">
                                <h4>Locație</h4>
                                <p>Str. Arhimede nr. 17</p>
                                <p>Dumbrăvița, județ Timiș</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-icon">📞</div>
                            <div className="contact-details">
                                <h4>Telefon</h4>
                                <p>0745.459.724</p>
                                <p>Disponibil în timpul programului</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-icon">✉️</div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>hello.sportnjoy@gmail.com</p>
                                <p>Răspundem în maxim 24h</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form">
                    <div className="form-header">
                        <h3>Trimite-ne un mesaj</h3>
                        <p>Completează formularul și te vom contacta în cel mai scurt timp</p>
                    </div>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Numele tău</label>
                                <input type="text" id="name" placeholder="Ex: Ioan Popescu" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email-ul tău</label>
                                <input type="email" id="email" placeholder="Ex: ioan@example.com" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="activity">Activitate</label>
                            <select id="activity" required>
                                <option value="">Selectează activitatea</option>
                                <option value="skiing">Schi</option>
                                <option value="crossfit">CrossFit</option>
                                <option value="bootcamp">Bootcamp</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mesajul tău</label>
                            <textarea id="message" placeholder="Cum te putem ajuta?" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Trimite mesaj</button>
                    </form>
                </div>
            </div>

            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.827123456789!2d21.234567!3d45.789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474f5f1234567890%3A0xabcdef1234567890!2sStrada%20Arhimede%2017%2C%20Dumbr%C4%83vi%C8%9Ba%2C%20Timi%C8%99!5e0!3m2!1sen!2sro!4v1234567890!5m2!1sen!2sro"
                    width="100%" 
                    height="450" 
                    style={{"border":0}} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact