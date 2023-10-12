import { Button, Item, ItemText, List } from "./ContactList.styled.";
import { useDispatch, useSelector } from 'react-redux';
//import { delClient } from "redux/store";
import { delClient } from "redux/contactsSlice";
import { getContacts, getFilterValue } from "redux/selectors";

export const ContactList = ({onDeleteContact}) => {
  const contacts  = useSelector(getContacts)
  //console.log('ContactList-contacts :>>', contacts)
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  //console.log('ContactList-filter :>>', filterValue);

  const getFilteredContats = () => {
    const filteredContats = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    return filteredContats;
  };

 return  (
<List>
{getFilteredContats().map(({id, name, number}) => (
<Item key={id}>
    <ItemText>{name}: {number} </ItemText>
    <Button onClick={() => dispatch(delClient(id))}>Delite</Button> </Item>
    ))}
</List>
)};//

