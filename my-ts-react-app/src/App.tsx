import React from 'react';
import logo from './logo.svg';
import './App.css';
import JournalEntryList from './types/journalEntryListProps.interface';
import  JournalEntryProps  from './types/journalEntry.interface';
import Profile from './Profile';
import ProfileProps  from './types/profileProps.interface';
function App() {
 // Example data for profile and journal entries

const exampleEntries: JournalEntryProps[] = [
  {
    entry: {
      id: 1,
      title: "First Entry",
      content: "Content of the first entry.",
      tags: ["tag1", "tag2"]
    }
  },
  {
    entry: {
      id: 2,
      title: "Second Entry",
      content: "Content of the second entry.",
      tags: ["tag3", "tag4"]
    }
  }]

  
const list: JournalEntryList = {
  entries: exampleEntries
}
 const profileData: ProfileProps = {
   profile: {
     name: 'John Doe',
     title: 'Software Engineer',
     location: 'New York'
   }
   // Add more profile data as needed
   ,
   journalEntryList: list
 };
return (
  <div>
      <h1>Journal Entries</h1>
      {/* Pass the exampleEntries array to the JournalEntryList component */}
      <Profile profile={profileData.profile} journalEntryList={profileData.journalEntryList} />
  </div>
);
}

export default App;
