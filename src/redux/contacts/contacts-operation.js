import axios from "axios";
import actions from "./contacts-action";

axios.defaults.baseURL = "http://localhost:7777";

export const getContactsOperation = () => async (dispatch) => {
  dispatch(actions.fetchContactsStart());
  try {
    const { data } = await axios.get("/contacts");
    console.log(data);
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

// export const fetchContacts = () => (dispatch) => {
//   dispatch(actions.fetchContactsRequest());

//   axios
//     .get("http://localhost:4000/contacts")
//     .then((response) => {
//       dispatch(actions.fetchContactsSuccess(response.data));
//     })
//     .catch(() => {
//       errorNotice();
//       dispatch(actions.fetchContactsError());
//     });
// };
// export const postContact = (contact) => (dispatch) => {
//   dispatch(actions.fetchContactsRequest());
//   axios
//     .post("http://localhost:4000/contacts", {
//       ...contact,
//     })
//     .then(function (response) {
//       if (response.status === 201) {
//         dispatch(fetchContacts());
//       }
//     })
//     .catch(function () {
//       errorNotice();
//       dispatch(actions.fetchContactsError());
//     });
// };

// export const deleteContact = (id) => (dispatch) => {
//   dispatch(actions.fetchContactsRequest());
//   axios
//     .delete(`http://localhost:4000/contacts/${id}`)
//     .then(function (response) {
//       if (response.status === 200) {
//         dispatch(fetchContacts());
//       }
//     })
//     .catch(function () {
//       errorNotice();
//       dispatch(actions.fetchContactsError());
//     });
// };
