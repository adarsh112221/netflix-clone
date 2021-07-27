import React, { useContext, useState, useEffect } from "react";
import { SelectionProfileContainer } from "./profiles";
import { FireBaseContext } from "../context/firebase";
import { Profile } from "../components/header/styles/header";
import { Loading } from "../components";
export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FireBaseContext);
  const user = firebase.auth().currentUser || {};
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);
  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : <Loading.ReleaseBody/>
  ) : (
    <SelectionProfileContainer user={user} setProfile={setProfile} />
  );
}
