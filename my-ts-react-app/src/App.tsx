import React from 'react';
import logo from './logo.svg';
import './App.css';
import JournalEntryList from './types/journalEntryListProps.interface';
import  JournalEntryProps  from './types/journalEntry.interface';
import Profile from './components/Profile';
import ProfileProps  from './types/profileProps.interface';
import Tag from './types/tag.interface'

function App() {
 // Example data for profile and journal entries
 const tags: Tag[] = [
  {
  info:{
    id: 1,
     name: "React", 
     categoryId: 1 
    }
  },
  {
  info:{
     id: 1, name: "Typescript", categoryId: 1 
   
    }

  },
  {
    info:{
       id: 1, name: "FireBase", categoryId: 1 
     
      }
  
    }

];
const exampleEntries: JournalEntryProps[] = [
  {
    entry: {
      id: 1,
      title: "Full Stack Application",
      content: "Connect react project to firebase, because github pages doesn't allow users to run backend code. With Firebase, traditional backend development is bypassed, putting the work into the client. ",
      tags: tags
    }
  },
  {
    entry: {
      id: 2,
      title: "Update React app UI",
      content: "Added Tailwinds css to project ",
      tags: tags
    }
  }]

  
const list: JournalEntryList = {
  entries: exampleEntries
}
 const profileData: ProfileProps = {
   profile: {
     name: 'Rachad Quintyne',
     title: 'Software Developer',
     location: 'Mississauga, Ontario, Canada'
   }
   // Add more profile data as needed
   ,
   journalEntryList: list
 };
return (
  <div>
      {/* Pass the exampleEntries array to the JournalEntryList component */}
      <Profile profile={profileData.profile} journalEntryList={profileData.journalEntryList} />
  </div>
);
}

export default App;
