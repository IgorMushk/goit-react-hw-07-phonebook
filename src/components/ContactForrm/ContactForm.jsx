import { nanoid } from 'nanoid';
import { Button, Form, Inpute, Label } from './ContactForm.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';


export function ContactForm() {
  const dispatch = useDispatch();
  const contacts  = useSelector(getContacts)

  const handlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    //console.dir('ContactForm - evt.target ',evt.target);
    const checkContactList = contacts.some(
      contact => contact.name.toLowerCase() === form.name.value.toLowerCase()
    );
    if (checkContactList) {
      alert(`${form.name.value} is already in contacts`);
      return;
    }
    const newContact ={
        id: nanoid(),
        name: form.name.value,
        phone: form.number.value
    }
    dispatch(addContact(newContact));
    form.reset();
};

  return (
    <>
      <Form onSubmit={handlerSubmit}>
        <Label>
          Name
          <Inpute
            type="text"
            name="name"
            //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Inpute
            type="tel"
            name="number"
            //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
}

