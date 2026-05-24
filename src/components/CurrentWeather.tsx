import type { WeatherData } from '../App'

interface CurrentWeatherProps {
  weatherData: WeatherData | null
  isLoading: boolean
  notFound: boolean
}

export function CurrentWeather({ weatherData, isLoading, notFound }: CurrentWeatherProps) {
  if (isLoading) {
    return (
      <section className="current-weather current-weather--feedback">
        <span className="feedback-text">Carregando...</span>
      </section>
    )
  }

  if (notFound) {
    return (
      <section className="current-weather current-weather--feedback">
        <span className="feedback-text feedback-text--error">
          Cidade não encontrada.
        </span>
      </section>
    )
  }

  if (!weatherData) return null

  return (
    <section className="current-weather">
      <div className="current-weather-header">
        <div className="current-weather-location">
          <h2 className="location-name">{weatherData.city}, {weatherData.state}</h2>
          <span className="location-updated">Atualizado agora</span>
        </div>
        <div className="current-weather-main">
          <div className="current-temp">
            <span className="temp-value">{weatherData.temp}</span>
            <span className="temp-unit">°C</span>
          </div>
          <span className="current-condition">{weatherData.condition}</span>
        </div>
      </div>
      <div className="current-weather-details">
        <div className="detail-item">
          <span className="detail-label">Sensação Térmica</span>
          <span className="detail-value">{weatherData.feelsLike}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Umidade</span>
          <span className="detail-value">{weatherData.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Vento</span>
          <span className="detail-value">{weatherData.wind} km/h</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Precipitação</span>
          <span className="detail-value">{weatherData.precipitation}%</span>
        </div>
      </div>
    </section>
  )
}
