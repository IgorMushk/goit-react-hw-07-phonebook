import { Container, Title, TitleList } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { FilterByName } from './Filter/FilterByName';
import { ContactForm } from './ContactForrm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';
import { getError, getIsLoading } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleList>Contact</TitleList>
      {isLoading && <Loader/>}
      <FilterByName />
      {error ?  <h2>Oops... something went wrong. Please reload the page</h2> :  <ContactList />} 
      <ToastContainer autoClose={2000} theme="colored" />
    </Container>
  );
}
