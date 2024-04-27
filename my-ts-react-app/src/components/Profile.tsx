import ProfileProps from "../types/profileProps.interface"
import JournalEntryList from './journalEntryList';
import '../styles/profile.css';
import '../styles/styles.css';

import { getDocs, collection, db } from '../firebase'; // Update the path if necessary
import React, { useEffect, useState } from 'react';
import { DocumentSnapshot, QuerySnapshot, doc } from "@firebase/firestore";
import { profile } from "console";
import JournalEntryListProps from "../types/journalEntryListProps.interface";
import BaseLayout from "./defaults/baseLayout";

const Profile: React.FC<ProfileProps> = ({ profile }) => {

  const [userProfile, setUserProfile] = useState<ProfileProps | null>(null);
  const [data, setData] = useState<JournalEntryListProps | null>(null);
  useEffect(() =>
   {
    const fetchUserProfile = async () => {
      try {
        const profileSnapshot = await getDocs(collection(db, "profiles"))
        const da: any[] = [];
        const userData = profileSnapshot.forEach((doc: DocumentSnapshot) => {
          const data = { id: doc.id === profile.id, ...doc.data() };
          da.push({ id: doc.id, ...doc.data() })
          console.log("Data:", JSON.stringify(data, null, 2));
        });


      }
    catch (error) {
      console.error("Error fetching data:", error);
    }
    }
  }
   
  )
  /*

  const [data, setData] = useState<any[]>(journalEntryList.entries);
  useEffect(() => {
    console.log("data" );
    const fetchDataFromTable = async () => {
      try {
        const entriesSnapshot = await getDocs(collection(db,"entries"))
        const da: any[] = [];
        entriesSnapshot.forEach((doc: DocumentSnapshot) => {
          const data = { id: doc.id, ...doc.data() };
          da.push({id:doc.id,...doc.data()})
          console.log("Data:", JSON.stringify(data, null, 2));
        });

        
      setData(da)
      data.map(entry => (
        <div key={entry.id}>
          <h3>{entry.title}</h3>
          <p>{entry.content}</p>
        </div>
      ))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

   fetchDataFromTable();

    return () => {
      // Unsubscribe from Firebase listeners or clean up any resources
    };
  }, []);
*/
  const downloadResume = async () => {
    const googleDriveLink = "https://drive.google.com/uc?export=download&id=1UsBGAJXyWdA9WQxzJeGj85fsSDKZFEVI";
    window.location.href = googleDriveLink;
  }
  return (

    <BaseLayout>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <section className="py-6 md:py-2">
          <div className="container max-w-screen-xl mx-auto px-4">
            <nav className="flex items-center justify-between mb-8 md:mb-16">



              <div className="px-5 py-2 md:px-7 md:py-3 bg-white font-medium md:font-semibold text-gray-700 text-sm md:text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                <button id="downloadBtn" onClick={downloadResume} value="download">Get my CV</button>
              </div>


            </nav>
            <div className="text-center">
              <div className="flex justify-center mb-2 md:mb-2">
                <img src="https://www.bing.com/th?id=OIP.42gCaIWoZnhhRiZ7BzQXjQHaHa&w=174&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Image" className="w-32 h-32 md:w-48 md:h-48 rounded-full" />
              </div>
              <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-0 md:mb-0">{profile.name}</h6>
              <h1 className="font-normal text-gray-900 text-3xl md:text-5xl leading-tight mb-0 md:mb-0">{profile.title}</h1>
              <p className="font-normal text-gray-600 text-sm md:text-md mb-0 md:mb-0">{profile.location}</p>

              {/*  <pre>{JSON.stringify(data, null, 2)}</pre>-->*/}
            </div>
          </div>
        </section>
        {/* Journal Entries */}
        <section>
          <h2 className="text-xl font-semibold mt-4 text-left mx-auto max-w-xl mb-5">Journal Entries:</h2>
        {/* <JournalEntryList entries={userProfile?.profile.journalEntryList} />*/}
        </section>
      </div>
      </BaseLayout>
    );
  }

  export default Profile;