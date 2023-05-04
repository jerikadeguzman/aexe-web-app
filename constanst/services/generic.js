import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  updateDoc,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import Router from "next/router";
import { db } from "../../firebase";

export default async function removeData(props) {
  const docRefa = doc(db, props.path, props.id);
  const docData = await getDoc(docRefa);
  const isEmailExisting = docData.exists();
  var date = new Date();

  const logsRef = doc(db, "logs", date.toString());

  if (isEmailExisting) {
    await deleteDoc(docRefa)

    await setDoc(logsRef, {
      action: "Remove Data",
      timestamp: date.toString(),
      description: `removed an data with a id of ${props.id}`,
    });

    Router.reload(window.location.pathname);
    return { success: true, message: "Data Removed Successfully." };
  } else {
    return { success: false, message: "Data Operation Failed." };
  }
}

// export default async function addMessage(path,)

export function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}