export function CurrentWeather() {
  return (
    <section className="current-weather">
      <div className="current-weather-header">
        <div className="current-weather-location">
          <h2 className="location-name">Londrina, PR</h2>
          <span className="location-updated">Atualizado agora</span>
        </div>
        <div className="current-weather-main">
          <div className="current-temp">
            <span className="temp-value">20</span>
            <span className="temp-unit">°C</span>
          </div>
          <span className="current-condition">Chuvoso</span>
        </div>
      </div>
      <div className="current-weather-details">
        <div className="detail-item">
          <span className="detail-label">Sensação Térmica</span>
          <span className="detail-value">17°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Umidade</span>
          <span className="detail-value">98%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Vento</span>
          <span className="detail-value">7 km/h</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Precipitação</span>
          <span className="detail-value">98%</span>
        </div>
      </div>
    </section>
  )
}
