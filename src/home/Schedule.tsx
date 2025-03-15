function Schedule() {
	return (
		<section id="schedule" className="schedule">
			<div className="container">
				<h2>Program</h2>
				<div className="schedule-grid">
					<div className="schedule-card">
						<div className="schedule-icon">🕒</div>
						<div className="schedule-content">
							<h3>Luni - Vineri</h3>
							<div className="time">07:00 - 21:00</div>
						</div>
					</div>
					<div className="schedule-card">
						<div className="schedule-icon">📅</div>
						<div className="schedule-content">
							<h3>Sâmbătă - Duminică</h3>
							<div className="time">10:00 - 21:00</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Schedule;
