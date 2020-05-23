import React, { useState } from 'react'
import './App.css'
import { ContactList, ContactManager } from './components'

const App = () => {
  const [contacts, setContacts] = useState([])
  const addContacts = (data) => {
    setContacts(
      contacts.filter((contact) => contact.name !== data.name).concat(data),
    )
  }

  return (
    <div className='app'>
      <ContactManager onSubmit={addContacts} />
      <ContactList listOfContacts={contacts} />
    </div>
  )
}

export default App
