import JournalEntryProps from "./types/journalEntry.interface";
import TagComponent from "./tags";
import './styles/journalEntry.css';

const JournalEntry: React.FC<JournalEntryProps> = ({entry}) =>{

    //split each tag by comma
    const tagsString = entry.tags.join(', ');
    return (
        <div className="journal-post">
            <div className="entry-title"> <h3>{entry.title}</h3></div>
            <div className="entry-content"><p>{entry.content}</p></div>
            <p className="entry-tags"> 
            {entry.tags.map(tag => (
                    <TagComponent key={tag.info.id} info={tag.info} />
                ))}</p>
        </div>
      );
}

export default JournalEntry;
