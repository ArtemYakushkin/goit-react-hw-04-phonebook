import { ItemContact, DelBtn } from "./ContactListItem.styled";

const ContactListItem = ({ deleteContact, contact: [id, name, number] }) => {
    return (
        <ItemContact key={id}>
            {name}..........{number}
            <DelBtn type="button" onClick={() => deleteContact(id)}>Delete</DelBtn>
        </ItemContact>
    );
}

export default ContactListItem;

