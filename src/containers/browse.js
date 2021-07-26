import React, { useContext, useState } from "react";
import { SelectionProfileContainer } from "./profiles";
import { FireBaseContext } from "../context/firebase";
export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FireBaseContext);
  const user = firebase.auth().currentUser || {};
  console.log("curr", user);
  return <SelectionProfileContainer user={user} setProfile={setProfile} />;
}
