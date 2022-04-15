import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log("props", props);

  const fetchContactList = props.contact.map((contact) => {
    return (
        <ContactCard contact={contact} />
    );
  });
  return <div className="ui celled list">{fetchContactList}</div>;
};

export default ContactList;
