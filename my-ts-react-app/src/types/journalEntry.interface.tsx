import {Tag} from "./tag.interface"

export interface JournalEntryProps{
    entry:{
     id: number;
     title: string;
     content: string;
     tags: Tag[]; 
    }
 };

 export default JournalEntryProps;
 