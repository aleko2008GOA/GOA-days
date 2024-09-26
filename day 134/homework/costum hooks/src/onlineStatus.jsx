import { useState } from 'react';

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    function checkOnline(){
        setIsOnline(navigator.onLine);
    }
    
    return [isOnline, checkOnline];
}
