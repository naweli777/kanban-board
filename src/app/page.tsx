"use client";

import Sidebar from "./components/Sidebar";
import BoardTasks from "./components/BoardTask";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./utils/firebaseConfig";
import { useEffect, useState } from "react";

import { getSession } from "next-auth/react";
import { data } from "./utils/data";

export default function Home() {
  const [userDetails, setUserDetails] = useState<{ [key: string]: any }>();

  const getUserSession = async () => {
    const session = await getSession();
    if (session) {
      setUserDetails(session.user);
    }
  };

  const handelAddDoc = async () => {
    if (userDetails) {
      const docRef = collection(db, "users", userDetails.email, "tasks");
      const getDos: any = await getDocs(docRef);

      if (getDos?.docs?.lenth > 0) {
        return;
      } else {
        try {
          await addDoc(
            collection(db, "users", userDetails?.email, "tasks"),
            data
          );
        } catch (e) {
          console.error("Error adding document", e);
        }
      }
    }
  };

  useEffect(() => {
   getUserSession();
  }, []);

  useEffect(()=>{
 handelAddDoc();
  },[userDetails])
  
  return (
    <main className="flex h-full">
      <Sidebar />
      <BoardTasks />
    </main>
  );
}
