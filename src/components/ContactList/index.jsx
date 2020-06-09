import React from "react";
import "./ContactList.css";
import { Contact } from "..";

const ContactList = ({ className, listOfContacts = [] }) => (
  <table
    className={`contact-list-base green${className ? ` ${className}` : ""}`}
  >
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    {listOfContacts.length ? (
      <tbody>
        {listOfContacts.map(contact => (
          <Contact {...contact} />
        ))}
      </tbody>
    ) : (
      <div>Please press the + symbol on the top right</div>
    )}
  </table>
);

export default ContactList;
