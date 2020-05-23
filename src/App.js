import React, { useState } from 'react'
import './App.css'
import { ContactList, ContactManager } from './components'

const App = () => {
  const [contacts, setContacts] = useState([
    { name: 'pippi', phone: '12345678', email: 'pippi@cat.com' },
    { name: 'cat', phone: '23456789', email: 'shameless_napper@pippi.com' },
    { name: 'feline', phone: '34567890', email: 'bestcat@felineworld.com' },
  ])
  const addContacts = (data) => {
    setContacts(contacts.concat(data))
  }

  return (
    <div className='app'>
      <ContactManager onSubmit={addContacts} />
      <ContactList listOfContacts={contacts} />
    </div>
  )
}

export default App
