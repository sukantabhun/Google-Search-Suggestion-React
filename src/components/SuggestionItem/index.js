import './index.css'

const SuggestionItem = props => {
  const {details, updateSearchInput} = props
  const {suggestion} = details

  const updateSearch = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <button className="button" type="button" onClick={updateSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
