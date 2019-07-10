<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const useOffline = () => {
    const [isOffline, setIsOffline] = useState(false);

    function onOffline() {
        setIsOffline(true);
    }

    function onOnline() {
        setIsOffline(false);
    }

    useEffect(() => {
        window.addEventListener('offline', onOffline);
        window.addEventListener('online', onOnline);
    }, []);

  return isOffline;
}
const CustomHooks = () => {

const isOffline = useOffline();

  if (isOffline) {
    return <div>Sorry, you are offline ...</div>;
  }

  return <div>You are online!</div>;
}

=======
import React, { useState, useEffect } from 'react';

const useOffline = () => {
    const [isOffline, setIsOffline] = useState(false);

    function onOffline() {
        setIsOffline(true);
    }

    function onOnline() {
        setIsOffline(false);
    }

    useEffect(() => {
        window.addEventListener('offline', onOffline);
        window.addEventListener('online', onOnline);
    }, []);

  return isOffline;
}
const CustomHooks = () => {

const isOffline = useOffline();

  if (isOffline) {
    return <div>Sorry, you are offline ...</div>;
  }

  return <div>You are online!</div>;
}

>>>>>>> 86bc598ddba8a03a060d529601dd0e78d8ec1a30
export default CustomHooks;