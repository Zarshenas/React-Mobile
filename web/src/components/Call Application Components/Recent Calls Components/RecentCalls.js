import React , {useEffect , useState}  from 'react';

import './RecentCalls.css';

import RecentCallDetail from '../Recent Calls Components/RecentCallDetail';

const RecentCalls = () => {
    const [recentCalls , setRecentCalls] = useState([])

    useEffect(() =>{
        setRecentCalls([
            {
                id:1,
                name:"mmd",
                phoneNumber:"0917251159",
                time:"18:32",
                callType:"missed"
            },
            {
                id:2,
                name:"gholam",
                phoneNumber:"0917251140",
                time:"18:32",
                callType:"outgoing"
            },
            {
                id:3,
                name:"Noob Sagdididri",
                phoneNumber:"0917251140",
                time:"18:32",
                callType:"incoming"
            }
        ])
    },[])
    console.log(recentCalls)
    return (
        <div className='Recent-container'>
            <h3>Recents</h3>
            {recentCalls.map((item) => <RecentCallDetail key={item.id} recentCall={item}/>)}
        </div>
    );
}

export default RecentCalls;
