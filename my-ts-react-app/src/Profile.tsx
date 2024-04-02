import ProfileProps from "./types/profileProps.interface"
import JournalEntryList from './journalEntryList';

    
const profile: React.FC<ProfileProps> = ({ profile, journalEntryList }) => {
    return(
        <div className="profile">
        {/* Profile Header */}
        <header className="profile-header">
          {/* Profile Picture */}
          <div className="profile-picture">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile Picture" />
          </div>
          {/* Profile Info */}
          <div className="profile-info">
            <h1 className="profile-name">{profile.name}</h1>
            <p className="profile-title">{profile.title}</p>
            <p className="profile-location">{profile.location}</p>
          </div>
        </header>
        {/* Journal Entries */}
        <section className="journal-entries">
          <h2 className="section-title">Journal Entries</h2>
          <JournalEntryList entries={journalEntryList.entries} />
        </section>
        {/* Sidebar */}
        <aside className="sidebar">
          {/* Sidebar Content */}
        </aside>
      </div>
    );
    }

    export default profile;