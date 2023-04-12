import React , {useState} from 'react';

import './ContactDetail.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditContact from './EditContact';

const ContactDetail = ({data , close}) => {
    const [isEditOpen , setIsEditOpen] = useState(false);
    const editContactHandler =() =>{
        setIsEditOpen(true);
    }

    const backToContacts = () =>{
        close(false)
    }
    return (
        <div className='contact-detail-section'>
            <div id='page-options' >
                <div onClick={backToContacts} id='Back'>
                    <span><FontAwesomeIcon icon="fa-chevron-left" /></span>
                    <span>Contacts</span>
                </div>
                <span onClick={editContactHandler}>Edit</span>
            </div>
            <p id='contact-name'>{Object.keys(data)[0]}</p>
            <div className='communication-container'>
                <div id='message-container'>
                    <FontAwesomeIcon icon="fa-comment" />
                    <span>message</span>
                </div>
                <div id='call-container'>
                    <FontAwesomeIcon icon="fa-phone" />
                    <span>call</span>
                </div>
            </div>
            <div className='contact-phonenumber-container defult-con'>
                <p>mobile</p>
                <p>{Object.values(data)[0]}</p>
            </div>
            <div className='more-options defult-con'>
                <div><span>Send Message</span></div>
                <div><span>Share My Location</span></div>
                <div><span>Delete this Contact</span></div>
            </div>
            {isEditOpen && <EditContact contactName={Object.keys(data)[0]} contactNumber ={Object.values(data)[0]} close={close} id={data.id} setIsEditOpen = {setIsEditOpen}/>}
        </div>
    );
}

export default ContactDetail;
