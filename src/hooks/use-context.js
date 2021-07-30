import { useState, useEffect, useContext } from "react";

import { FireBaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FireBaseContext);
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  console.log({[target]:content});
  return {[target]:content}
}
