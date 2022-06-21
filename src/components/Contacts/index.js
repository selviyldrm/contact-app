import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import './style.css'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: 2334
    },
    {
      fullname: "Ayşe",
      phone_number: 1234
    },
    {
      fullname: "Seda",
      phone_number: 4532
    }
  ]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts])
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts