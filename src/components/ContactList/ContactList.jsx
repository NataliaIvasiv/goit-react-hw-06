import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { getContactFilter, getContacts } from '../../redux/selectors';

const searchContacts = ({contacts}, filterValue) => {
    return contacts.filter((contact) =>{
       return contact.name.toLowerCase().includes(filterValue.toLowerCase())}
    )
    
    
}

const ContactList = () => {
  
    const contacts = useSelector(getContacts);
    const filterValue = useSelector(getContactFilter);
    const filteredContacts = searchContacts(contacts, filterValue);
    console.log(contacts)
    return (
        <ul className={css.contactsList}>
            
            {filteredContacts.map((contact) => 
                    <li className={css.contactsItem} key={ nanoid()}>
                    <Contact name={contact.name} number={contact.number} id={contact.id}/>
                </li>
                )}

        </ul>
    )
}
export default ContactList;