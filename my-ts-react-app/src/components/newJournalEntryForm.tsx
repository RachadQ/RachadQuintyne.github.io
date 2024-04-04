import React,{useState} from "react";
import NewJournalEntryFormProps from "../types/newJournalEntryFormProps.interface"
import JournalEntry from "../types/journalEntry.interface";
import Tag from "../types/tag.interface"


const NewJournalEntryForm: React.FC<NewJournalEntryFormProps> = ({addEntry}) => {
    return(
        <div className="new-entry-form"></div>
    );
    /*const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [tags,setTags] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Validation

        if(!!title || !content){
            alert('lease fill in both title and content fields.')
            return;
        }
    
         // Call the addEntry function to add the new entry
        addEntry(addEntry);

    const tags: Tag[] ={
        info:{

        }
    }
        // Create a new journal entry object
      const newEntry: JournalEntry = {
        entry:{
        id: Math.floor(Math.random() * 1000), // Replace with a better ID generation method
        title,
        content,
        tags: tagList,
        }
      };
  
        
         // Reset form fields after submission
        setTitle('');
        setContent('');
        setTags('');
    
    return(
        <div className="new-entry-form">
        <h2>Create a New Journal Entry</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Content:
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
          </label>
          <label>
            Tags (comma-separated):
            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
          </label>
          <button type="submit">Add Entry</button>
        </form>
      </div>
    );
    */
};

export default NewJournalEntryForm;