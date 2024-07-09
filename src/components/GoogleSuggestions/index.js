import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachInput =>
      eachInput.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="element-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="img"
          />
          <div className="suggestion-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.onSearchInput}
                className="search-input"
              />
            </div>
            <ul type="none">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  details={eachItem}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
