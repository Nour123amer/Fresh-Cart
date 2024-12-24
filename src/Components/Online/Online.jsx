import React from 'react'
import useOnlineStatus from '../../Hooks/useOnlineStatus'

export default function Online({children}) {
    const isOline = useOnlineStatus();
    if(isOline === true){
        return children
    }
}
