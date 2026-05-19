import './App.css'
import { Header } from './components/Header'
import { CurrentWeather } from './components/CurrentWeather'
import { WeatherCard } from './components/WeatherCard'
import { SearchLocation } from './components/SearchLocation'
import { Footer } from './components/Footer'

const forecast = [
  { day: 'Dom', date: '17/05', condition: 'Chuvoso', maxTemp: 20, minTemp: 18, isToday: true },
  { day: 'Seg', date: '18/05', condition: 'Chuvoso', maxTemp: 22, minTemp: 16 },
  { day: 'Ter', date: '19/05', condition: 'Nublado', maxTemp: 21, minTemp: 15 },
  { day: 'Qua', date: '20/05', condition: 'Nublado', maxTemp: 20, minTemp: 14 },
  { day: 'Qui', date: '21/05', condition: 'Nublado', maxTemp: 19, minTemp: 13 },
  { day: 'Sex', date: '22/05', condition: 'Chuvoso', maxTemp: 17, minTemp: 12 },
  { day: 'Sab', date: '23/05', condition: 'Ensolarado', maxTemp: 21, minTemp: 9 },
]

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SearchLocation />
        <CurrentWeather />
        <section className="forecast-section">
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
      </main>
      <Footer />
    </div>
  )
}

export default App
