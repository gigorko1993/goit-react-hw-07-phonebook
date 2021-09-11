import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getFiltredContacts } from "../../../redux/contacts/contacts-selectors";

import {
  deleteContactsOperation,
  getContactsOperation,
} from "../../../redux/contacts/contacts-operation";

import s from "./ContactItem.module.css";

const ContactItem = () => {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          {name}: {number}
          <button
            className={s.button}
            onClick={() => dispatch(deleteContactsOperation(id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactItem;
