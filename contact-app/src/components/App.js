import React, { useEffect, useState } from "react";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import "./App.css"

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
      console.log(contact)
      setContacts([...contacts, contact]);
  };

  useEffect(() => {
    console.log("localStorage Save", contacts)
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contact={contacts} />
    </div>
  );
}

export default App;
