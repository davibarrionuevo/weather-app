export function SearchLocation() {
  return (
    <div className="search-location">
      <label className="search-label" htmlFor="location-input">
        Localização
      </label>
      <div className="search-wrapper">
        <input
          id="location-input"
          type="text"
          className="search-input"
          placeholder="Buscar cidade ou região..."
        />
        <button type="button" className="search-button">
          Buscar
        </button>
      </div>
    </div>
  )
}
