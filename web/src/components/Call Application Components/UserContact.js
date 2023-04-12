import React, { useContext, useState } from "react";

import "./UserContact.css";

import { ContactDetailContext } from "../Contacts Application Components/ContactsComponent.js";

const UserContact = ({
  setselectedContact,
  contactName,
  contactDetail,
  setContactDetail,
}) => {
  const { isContactDetailOpen, setIsContactDetailOpen } =
    useContext(ContactDetailContext);

  const openContactDetail = () => {
    setIsContactDetailOpen(true);
    setContactDetail(contactDetail);
    setselectedContact(contactDetail);
  };
  return (
    <div onClick={openContactDetail} className="contact-container">
      <span id="contact-name">{contactName}</span>
    </div>
  );
};

export default UserContact;
