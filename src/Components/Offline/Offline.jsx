import React from 'react'
import useOnlineStatus from '../../Hooks/useOnlineStatus';

export default function Offline({children}) {
    const isOffline = useOnlineStatus();
     if(isOffline === false){
         return children
     }
}
