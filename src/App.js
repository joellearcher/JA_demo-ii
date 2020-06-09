import React, { useState } from "react";
import "./App.css";
import profileImage from "./img/webdev_hp.jpg";
import { ContactList, ContactManager } from "./components";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const addContacts = data => {
    setContacts(
      contacts.filter(contact => contact.name !== data.name).concat(data)
    );
  };

  return (
    <div className="app">
      <h1>Test Joelle 123</h1>
      <img src={profileImage} alt="profile-image" />
      <ContactManager onSubmit={addContacts} />
      <ContactList listOfContacts={contacts} />
    </div>
  );
};

export default App;
