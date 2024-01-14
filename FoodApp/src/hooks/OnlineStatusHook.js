import { useState, useEffect } from "react";

export const useOnlineStatus = () => {
  const [isOnline, setOnlineStatus] = useState(true);
  useEffect(() => {
    function setOnlineAsActive() {
      setOnlineStatus(true);
    }
    function setOnlineAsInActive() {
      setOnlineStatus(false);
    }

    window.addEventListener("online", setOnlineAsActive);
    window.addEventListener("offline", setOnlineAsInActive);

    // Stops listening to the event when this component unmounts
    return ()=>{
        window.removeEventListener("online", setOnlineAsActive);
        window.removeEventListener("offline", setOnlineAsInActive);
    
    }
  }, [isOnline]);

  return [isOnline]; // Evertime when isOnline chnages, the useEffect() gets call and it re-renders the component
};
