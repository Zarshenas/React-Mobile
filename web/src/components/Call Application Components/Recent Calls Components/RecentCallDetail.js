import React from 'react';

import './RecentCallDetail.css'
import missedCallImg from '../../../Images/missedcall.png';
import incomingCallImg from '../../../Images/incomingcall.png';
import outgoingCallImg from '../../../Images/outgoingcall.png';

const RecentCallDetail = ({recentCall}) => {
    return (
        <div className='recent-item'>
                <div id='first-section'>
                    <img src={recentCall.callType ==="incoming"? incomingCallImg :recentCall.callType ==="outgoing"?outgoingCallImg:recentCall.callType ==="missed"?missedCallImg:""} alt="" />
                    <p>{recentCall.name ? recentCall.name : recentCall.phoneNumber}</p>
                </div>
                <div id='second-section'>
                    <p>{recentCall.name ? recentCall.phoneNumber: ""}</p>
                    <p>{recentCall.time}</p>
                </div>
            </div>
    );
}

export default RecentCallDetail;
