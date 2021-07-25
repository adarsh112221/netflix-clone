import React, { useContext } from "react";
import  {SelectionProfileContainer} from "./profiles";
import { FireBaseContext } from "../context/firebase";
export function BrowseContainer({slides}) {
    const{firebase}=useContext(FireBaseContext);
    const user =firebase.auth().currentUser||{};
  return <SelectionProfileContainer user={user} />;
}
