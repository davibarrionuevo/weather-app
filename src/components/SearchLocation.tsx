interface SearchLocationProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
}

export function SearchLocation({ value, onChange, onSearch }: SearchLocationProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') onSearch()
  }

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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="search-button" onClick={onSearch}>
          Buscar
        </button>
      </div>
    </div>
  )
}
