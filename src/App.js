// import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import { getLoader } from "./redux/contacts/contacts-selectors";
// import { useSelector } from "react-redux";

import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import s from "./App.module.css";

// const loader = (
//   <Loader
//     type="Circles"
//     color="rgba(200, 100, 25, 0.7)"
//     height={80}
//     width={80}
//   />
// );

export default function App() {
  // const loading = useSelector(getLoader);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={s.thumb}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        {/* {loading ? <div>{loader}</div> : <ContactList />} */}
        <ContactList />
      </div>
    </>
  );
}
