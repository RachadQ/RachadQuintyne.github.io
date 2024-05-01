import React from 'react';
import logo from './logo.svg';
import './App.css';
import JournalEntryListProp from './types/journalEntryListProps.interface';
import  JournalEntryProps  from './types/journalEntry.interface';
import Profile from './components/Profile';
import ProfileProps  from './types/profileProps.interface';
import Tag from './types/tag.interface'
import { HashRouter as Router, Route, Routes  } from 'react-router-dom';
import JournalEntryList from './components/journalEntryList';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';

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
const tags2: Tag[] = [
  {
  info:{
    id: 1,
     name: "Excel", 
     categoryId: 1 
    }
  },
  {
  info:{
     id: 1, name: "Vlookup", categoryId: 1 
   
    }

  },
  {
    info:{
       id: 1, name: "Accounting", categoryId: 1 
     
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
      title: "Learn't excel Basics",
      content: "Today, I utilized Excel's vlookup function to match product IDs with corresponding prices for a sales campaign, drawing from my prior experience with the tool during an internship. Despite encountering discrepancies, I successfully generated a pricing list, showcasing my proficiency in Excel and problem-solving skills.",
      tags: tags2
    }
  }]

  
const list: JournalEntryListProp = {
  entries: exampleEntries
}
 const profileData: ProfileProps = {
   profile: {
    id: '1',
     name: 'Rachad Quintyne',
     title: 'Software Developer',
     location: 'Mississauga, Ontario, Canada',
     journalEntryList: list
   }
  
 };
return (
  <div>
      {/* Pass the exampleEntries array to the JournalEntryList component */}
     {/* <Profile profile={profileData.profile} journalEntryList={profileData.journalEntryList} />*/}

      <Router>
        <Routes>
          {/*<UserProfile profile={profileData} />*/}
          {/*<Route path="/"  element={<HomePage/>} >*/}
          {/*<Route path="/" element={<HomePage/>} />*/}
          {/*<Route path="/" element={<LoginPage/>} />*/}
          <Route path="/" element={<RegisterPage/>} />


        </Routes>
       </Router>
  </div>
);
}

document.title = "Rachad Quintyne | Entries";
export default App;
