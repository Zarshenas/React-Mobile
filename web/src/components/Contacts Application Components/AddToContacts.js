import React , {createRef , useState}from 'react';

import styled from 'styled-components';


import './AddToContacts.css'

import { fetchNui } from '../../utils/fetchNui';

const ErrorDiv  = styled.div`
    background-color: #ff4a4a;
    position: absolute;
    top: 0px;
    width: 93%;
    padding:5px 10px;
    border-radius: 10px;
    transition: all .3s ease-in-out; 
    transform: ${ props=> props.isErrorVisible ? "translateY(50px)" : 'translateY(-200%)'};
`;
const nameInputRef = createRef();
const numberInputRef = createRef();
const errorRef = createRef();

const AddToContacts = ({setIsAddContactOpen}) => {
    const [isErrorVisible , setIsErrorVisible] = useState(false)

    const [newContact,setNewContact]= useState({})

    const cancelHandler = () =>{
        setIsAddContactOpen(false)
    }
    const AddContactlHandler = () =>{
        if (numberInputRef.current.value.length !==11) {
            errorRef.current.innerText = "Number Is invalid !"
                setTimeout(()=>{
                    setIsErrorVisible(true)
                }, 1);
                setTimeout(()=>{
                    setIsErrorVisible(false)
                }, 3000);
                numberInputRef.current.value="";
        }
        setNewContact({
           [nameInputRef.current.value]:numberInputRef.current.value
        })
        fetchNui("AddToContactRequest", newContact).then(data=>{
            if (data === "successful") {
                setIsAddContactOpen(false)
            }else{
                errorRef.current.innerText = "There was an Error!" 
                setTimeout(()=>{
                    setIsErrorVisible(true)
                }, 1);
                setTimeout(()=>{
                    setIsErrorVisible(false)
                }, 3000);
            }
          });
    }
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
                <span onClick={cancelHandler}>Cancel</span>
                <span onClick={AddContactlHandler}>Add</span>
            </div>
            <div className="field-container">
                <input ref={nameInputRef} placeholder="Name" type="text" />
            </div>
            <div className="field-container">
                <input onKeyPress={allowNumberHandler} ref={numberInputRef} placeholder="Number" type="text" />
            </div>
            <ErrorDiv isErrorVisible={isErrorVisible} >
                <span id='error-Text' ref={errorRef}></span>
            </ErrorDiv>
        </div>
    );
}

export default AddToContacts;
