import React from "react";
import User from "../images/user.png"

const ContactCard = (props) => {
    const {id, name, phone, email} = props.contact
  return (
    <div className="item">
    <img className="ui avatar image" src={User} alt="user" />
      <div className="content">
        <div className="header">{name}</div>

        <div>{phone}</div>

        <div>{email}</div>

        <i className="trash alternate outline icon" style={{color: "red", marginTop: "8px"}}></i>
      </div>
    </div>
  );
};

export default ContactCard;
