import JournalEntryList from "./journalEntryListProps.interface";


interface ProfileProps {
    profile: {
      name: string;
      title: string;
      location: string;
    };
    journalEntryList: JournalEntryList;
  }


export default ProfileProps