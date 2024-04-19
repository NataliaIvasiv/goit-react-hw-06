import css from './Contact.module.css'
import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
const Contact = ({ name, number, id, onDelete }) => {
    return (
        <div className={css.ContactContainer}>
            
            <div><p className={css.contactName}><TiUser />{name}</p>
                <p className={css.contactName}><TiPhone/>{ number}</p>
            </div>
            <button className={css.contactDeleteBtn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}
export default Contact;