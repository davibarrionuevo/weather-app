interface WeatherCardProps {
  day: string
  date: string
  condition: string
  maxTemp: number
  minTemp: number
  isToday?: boolean
}

function getConditionClass(condition: string): string {
  const lower = condition.toLowerCase()
  if (lower.includes('ensolarado')) return 'sunny'
  if (lower.includes('chuvoso') || lower.includes('chuva')) return 'rainy'
  if (lower.includes('tempestade')) return 'stormy'
  if (lower.includes('nublado')) return 'cloudy'
  return 'default'
}

export function WeatherCard({ day, date, condition, maxTemp, minTemp, isToday = false }: WeatherCardProps) {
  return (
    <div className={`weather-card${isToday ? ' weather-card--today' : ''}`}>
      <span className="weather-card-day">{isToday ? 'Hoje' : day}</span>
      <span className="weather-card-date">{date}</span>
      <div className={`weather-card-icon condition-${getConditionClass(condition)}`}></div>
      <span className="weather-card-condition">{condition}</span>
      <div className="weather-card-temps">
        <span className="temp-max">{maxTemp}°</span>
        <span className="temp-min">{minTemp}°</span>
      </div>
    </div>
  )
}
