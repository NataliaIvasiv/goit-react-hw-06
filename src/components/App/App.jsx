import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from './App.module.css'








const App = () => {

  //const [searchItem, setSearchItem] = useState('');
 
// useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);


  // const searchContacts = contacts.filter((contact) =>
  // contact.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
  // )



  
  return (
    <div className={css.mainContainer}>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm/>
      {/* <SearchBox value={searchItem} onSearchContacts={setSearchItem} /> */}
      <ContactList/>
      </div>
  );
};

export default App;