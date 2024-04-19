import css from './SearchBox.module.css'

const SearchBox = ({value, onSearchContacts}) => {

    return (
      <div className={css.searchBoxContainer}>
        <p className={css.searchBoxLabel}>Find contacts by name</p>
        <input className={css.searchBoxInput}
          type="text"
          value={value}
          onChange={(event)=> onSearchContacts(event.target.value)}
          placeholder='type contact name' />
      </div>
    )
}

export default SearchBox;