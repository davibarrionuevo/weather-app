import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { CurrentWeather } from './components/CurrentWeather'
import { WeatherCard } from './components/WeatherCard'
import { SearchLocation } from './components/SearchLocation'
import { Footer } from './components/Footer'

export interface WeatherData {
  city: string
  state: string
  temp: number
  condition: string
  feelsLike: number
  humidity: number
  wind: number
  precipitation: number
}

export interface ForecastDay {
  day: string
  date: string
  condition: string
  maxTemp: number
  minTemp: number
  isToday?: boolean
}

const mockDatabase: Record<string, { weather: WeatherData; forecast: ForecastDay[] }> = {
  londrina: {
    weather: { city: 'Londrina', state: 'PR', temp: 20, condition: 'Chuvoso', feelsLike: 17, humidity: 98, wind: 7, precipitation: 98 },
    forecast: [
      { day: 'Dom', date: '17/05', condition: 'Chuvoso', maxTemp: 20, minTemp: 18, isToday: true },
      { day: 'Seg', date: '18/05', condition: 'Chuvoso', maxTemp: 22, minTemp: 16 },
      { day: 'Ter', date: '19/05', condition: 'Nublado', maxTemp: 21, minTemp: 15 },
      { day: 'Qua', date: '20/05', condition: 'Nublado', maxTemp: 20, minTemp: 14 },
      { day: 'Qui', date: '21/05', condition: 'Nublado', maxTemp: 19, minTemp: 13 },
      { day: 'Sex', date: '22/05', condition: 'Chuvoso', maxTemp: 17, minTemp: 12 },
      { day: 'Sab', date: '23/05', condition: 'Ensolarado', maxTemp: 21, minTemp: 9 },
    ],
  },
  maringa: {
    weather: { city: 'Maringá', state: 'PR', temp: 22, condition: 'Nublado', feelsLike: 20, humidity: 88, wind: 11, precipitation: 60 },
    forecast: [
      { day: 'Dom', date: '17/05', condition: 'Nublado', maxTemp: 22, minTemp: 17, isToday: true },
      { day: 'Seg', date: '18/05', condition: 'Chuvoso', maxTemp: 21, minTemp: 16 },
      { day: 'Ter', date: '19/05', condition: 'Chuvoso', maxTemp: 20, minTemp: 15 },
      { day: 'Qua', date: '20/05', condition: 'Nublado', maxTemp: 22, minTemp: 15 },
      { day: 'Qui', date: '21/05', condition: 'Nublado', maxTemp: 23, minTemp: 14 },
      { day: 'Sex', date: '22/05', condition: 'Ensolarado', maxTemp: 25, minTemp: 13 },
      { day: 'Sab', date: '23/05', condition: 'Ensolarado', maxTemp: 26, minTemp: 12 },
    ],
  },
  curitiba: {
    weather: { city: 'Curitiba', state: 'PR', temp: 14, condition: 'Nublado', feelsLike: 11, humidity: 85, wind: 22, precipitation: 40 },
    forecast: [
      { day: 'Dom', date: '17/05', condition: 'Nublado', maxTemp: 14, minTemp: 9, isToday: true },
      { day: 'Seg', date: '18/05', condition: 'Chuvoso', maxTemp: 12, minTemp: 8 },
      { day: 'Ter', date: '19/05', condition: 'Chuvoso', maxTemp: 11, minTemp: 7 },
      { day: 'Qua', date: '20/05', condition: 'Nublado', maxTemp: 13, minTemp: 8 },
      { day: 'Qui', date: '21/05', condition: 'Ensolarado', maxTemp: 17, minTemp: 9 },
      { day: 'Sex', date: '22/05', condition: 'Ensolarado', maxTemp: 18, minTemp: 10 },
      { day: 'Sab', date: '23/05', condition: 'Nublado', maxTemp: 15, minTemp: 9 },
    ],
  },
}

function normalize(city: string): string {
  return city.toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

function fetchWeather(city: string): Promise<{ weather: WeatherData; forecast: ForecastDay[] } | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDatabase[normalize(city)] ?? null)
    }, 1200)
  })
}

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [searchedCity, setSearchedCity] = useState('Londrina')
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<ForecastDay[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setNotFound(false)

    fetchWeather(searchedCity).then((data) => {
      if (data) {
        setWeatherData(data.weather)
        setForecast(data.forecast)
      } else {
        setNotFound(true)
      }
      setIsLoading(false)
    })
  }, [searchedCity])

  function handleSearch() {
    const trimmed = searchInput.trim()
    if (trimmed === '') return
    setSearchedCity(trimmed)
  }

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SearchLocation
          value={searchInput}
          onChange={setSearchInput}
          onSearch={handleSearch}
        />
        <CurrentWeather
          weatherData={weatherData}
          isLoading={isLoading}
          notFound={notFound}
        />
        {!notFound && (
          <section className={`forecast-section${isLoading ? ' forecast-section--loading' : ''}`}>
            <h3 className="forecast-title">Previsão para os próximos dias</h3>
            <div className="forecast-grid">
              {forecast.map((item) => (
                <WeatherCard
                  key={item.date}
                  day={item.day}
                  date={item.date}
                  condition={item.condition}
                  maxTemp={item.maxTemp}
                  minTemp={item.minTemp}
                  isToday={item.isToday}
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
