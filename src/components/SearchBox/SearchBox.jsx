import { contactsFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getContactFilter } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getContactFilter)
  const handleChangeInput = (e) => {
  dispatch(contactsFilter(e.target.value))
}
    return (
      <div className={css.searchBoxContainer}>
        <p className={css.searchBoxLabel}>Find contacts by name</p>
        <input className={css.searchBoxInput}
          type="text"
          value={filterValue}
          onChange={handleChangeInput}
          placeholder='type contact name' />
      </div>
    )
}

export default SearchBox;