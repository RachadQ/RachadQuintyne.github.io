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
     name: "C#", 
     categoryId: 1 
    }
  },
  {
  info:{
     id: 1, name: "C++", categoryId: 1 
   
    }

  }

];
const exampleEntries: JournalEntryProps[] = [
  {
    entry: {
      id: 1,
      title: "First Entry",
      content: "Content of the first entry.",
      tags: tags
    }
  },
  {
    entry: {
      id: 2,
      title: "Second Entry",
      content: "Content of the second entry.",
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
     location: 'Mississauga, Ontario'
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
