import React from 'react';
import {useState} from 'react';
import { getTheToken } from '../../../core/firebase';

 
const ApprovePushNotifications = () => {
    const [isTokenFound, setTokenFound] = useState(false);
    setTimeout(() => {
        getTheToken(setTokenFound);

    }, 3000)
    
    // inside the jsx being returned:
    

    return (
        <div>
            {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
            {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        </div>
    )
}
export default ApprovePushNotifications