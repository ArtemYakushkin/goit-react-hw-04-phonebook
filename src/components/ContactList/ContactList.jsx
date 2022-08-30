import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem/ContactListItem";
import { ListContacts } from "./ContactList.styled";

const ContactList = ({ contacts, del}) => {
    return (
        <div>
            <ListContacts>
                {contacts.map(({ id, name, number }) => (
                    <ContactListItem key={id}
                        contact={[id, name, number]}
                        deleteContact={() => del(id)}
                    />
                ))}
            </ListContacts>
        </div>
    );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  del: PropTypes.func.isRequired,
};

export default ContactList;