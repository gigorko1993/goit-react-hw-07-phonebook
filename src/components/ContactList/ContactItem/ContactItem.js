import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getContacts } from "../../../redux/contacts/contacts-selectors";

import {
  deleteContactsOperation,
  getContactsOperation,
} from "../../../redux/contacts/contacts-operation";

import s from "./ContactItem.module.css";

const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContactsOperation(id));

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
            onClick={() => onDeleteContact()}
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
