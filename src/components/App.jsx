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
import ScrollToTop from 'react-scroll-to-top';
import { AiOutlineArrowUp } from "react-icons/ai";

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ScrollToTop smooth style={{borderRadius: "50%"}} component={<p style={{ color: "gray", margin: "auto", borderRadius: "50%" }}><AiOutlineArrowUp size={24} /></p>} />
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleList>Contact</TitleList>
      {isLoading && <Loader/>}
      <FilterByName />
      {error ?  <h2>Oops... something went wrong. Please reload the page</h2> :  <ContactList />} 
      <ToastContainer autoClose={1000} theme="colored" />
    </Container>
  );
}
