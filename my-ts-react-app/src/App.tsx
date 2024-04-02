import React from 'react';
import logo from './logo.svg';
import './App.css';
import JournalEntryList from './journalEntryList';
import  JournalEntryProps  from './types/journalEntry.interface';
function App() {
// Example data for journal entries
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
return (
  <div>
      <h1>Journal Entries</h1>
      {/* Pass the exampleEntries array to the JournalEntryList component */}
      <JournalEntryList entries={exampleEntries} />
  </div>
);
}

export default App;
