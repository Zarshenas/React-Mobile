import React , {useEffect , useState}  from 'react';

import './RecentCalls.css';

import RecentCallDetail from '../Recent Calls Components/RecentCallDetail';
import { fetchNui } from '../../../utils/fetchNui';

const RecentCalls = () => {
    const [recentCalls , setRecentCalls] = useState([])

    useEffect(() =>{
        fetchNui("GetRecentCalls" , {}).then(data => {
            setRecentCalls(data)
            
        })
    },[])
    return (
        <div className='Recent-container'>
            <h3>Recents</h3>
            {recentCalls.map((item) => <RecentCallDetail key={item.id} recentCall={item}/>)}
        </div>
    );
}

export default RecentCalls;
