import axios from "axios";
import actions from "./contacts-action";

axios.defaults.baseURL = "http://localhost:7777";

export const getContactsOperation = () => async (dispatch) => {
  dispatch(actions.fetchContactsStart());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(actions.getContacts(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  } finally {
    dispatch(actions.fetchContactsFinished());
  }
};

export const postContactsOperation = (contact) => async (dispatch) => {
  dispatch(actions.fetchContactsStart());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(actions.addContact(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  } finally {
    dispatch(actions.fetchContactsFinished());
  }
};

export const deleteContactsOperation = (id) => async (dispatch) => {
  dispatch(actions.fetchContactsStart());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteContact(id));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  } finally {
    dispatch(actions.fetchContactsFinished());
  }
};
