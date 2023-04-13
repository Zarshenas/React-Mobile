import React, { useEffect, createRef, useContext } from "react";

import "./EditContact.css";

import { ContactDetailContext } from "./ContactsComponent";
import { fetchNui } from "../../utils/fetchNui";

const nameInputRef = createRef();
const numberInputRef = createRef();

const EditContact = ({ contactName, contactNumber, id, setIsEditOpen ,close }) => {
  const { contacts, setContacts } = useContext(ContactDetailContext);
  const cancelEdit = () => {
    setIsEditOpen(false);
  };
  const submitEdit = () => {
    const index = contacts.findIndex(item => Object.keys(item)[0] === contactName && Object.values(item)[0] === contactNumber);
    let newArr = [...contacts]; 
    newArr[index]= {[nameInputRef.current.value] : numberInputRef.current.value}
    setContacts([
      ...newArr
    ]);
    setIsEditOpen(false);
    close(false);
    fetchNui("GetEditedContacts", contacts).then(data=>{
      if (data === "successful") {
        setIsEditOpen(false);
      }
    })
  };
  useEffect(() => {
    nameInputRef.current.value = contactName;
    numberInputRef.current.value = contactNumber;
  }, [contactName, contactNumber]);

  const allowNumberHandler = (e) => {
    let alowedCharacters = ["1","2","3","4","5","6","7","8","9","0"]
    if (!alowedCharacters.includes(e.key)) {
        e.preventDefault();
        return false;
    }
}
  return (
    <div className="edit-contact-container">
      <div className="page-options">
        <span onClick={cancelEdit}>Cancel</span>
        <span onClick={submitEdit}>Done</span>
      </div>
      <div className="field-container">
        <input ref={nameInputRef} placeholder="Name" type="text" />
      </div>
      <div className="field-container">
        <input onKeyPress={allowNumberHandler} ref={numberInputRef} placeholder="Number" type="text" />
      </div>
    </div>
  );
};

export default EditContact;
