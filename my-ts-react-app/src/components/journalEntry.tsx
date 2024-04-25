import JournalEntryProps from "../types/journalEntry.interface";
import TagComponent from "./tags";
//import '../styles/journalEntry.css';
import  '../styles/styles.css'

const JournalEntry: React.FC<JournalEntryProps> = ({entry}) =>{

  
    return (
        <div className="journal-post bg-white rounded-lg shadow-md p-8 md:p-12 mb-8 mx-auto max-w-xl">
    <div className="entry-title">
        <h3 className="text-xl md:text-2xl font-semibold text-center">{entry.title}</h3>
    </div>
    <div className="entry-content mt-4 md:mt-6">
        <p className="text-lg md:text-xl text-gray-700 text-center">{entry.content}</p>
    </div>
    <div className="entry-tags flex flex-wrap mt-4 md:mt-6 justify-center" style={{ columnGap: '20px' }}>
        {entry.tags.map(tag => (
            <div key={tag.info.id} className="mr-2 mb-2">
                <TagComponent key={tag.info.id} info={tag.info} />
            </div>
        ))}
    </div>
</div>
      );
}

export default JournalEntry;
