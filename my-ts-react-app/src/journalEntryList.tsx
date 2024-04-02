import React from 'react';
import JournalEntry from './journalEntry';
import JournalEntryListProps from './types/journalEntryListProps.interface';


    const JournalEntryList: React.FC<JournalEntryListProps> = ({entries}) =>{
        return (
            <div className="entry-list">
            {entries.map((entry, index) => (
                <JournalEntry key={index} entry={entry.entry} /> // Pass each entry object to JournalEntry component
            ))}
          </div>
          );
    }

    export default JournalEntryList;