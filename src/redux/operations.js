import axios from "axios";
import { fetchingError, fetchingInProgress, fetchingSuccess } from "./contactsSlice";

axios.defaults.baseURL = "https://6527d88c931d71583df17a8b.mockapi.io";

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/contacts");
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
