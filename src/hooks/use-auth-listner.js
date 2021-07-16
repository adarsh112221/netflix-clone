import { useState, useEffect, useContext } from "react";

import { FireBaseContext } from "../context/firebase";

export default function useAuthListner() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FireBaseContext);
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener(); //to unmount the listner
  }, []);
  return { user };
}
