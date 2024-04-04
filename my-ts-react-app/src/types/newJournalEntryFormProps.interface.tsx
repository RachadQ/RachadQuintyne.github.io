import React from "react";
import JournalEntry from "../types/journalEntry.interface";

interface NewJournalEntryFormProps{
    addEntry: (newEntry:JournalEntry) => void;
}

export default NewJournalEntryFormProps;