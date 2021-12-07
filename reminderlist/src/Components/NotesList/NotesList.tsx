import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'   
import { Note } from '../../models/note.model';
import Notes from '../Notes/Notes';

export interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id))
    }
    
    const renderNotes = (): JSX.Element[] => {
        const notesCopy = [...notes];

        return notesCopy.map(note => {
            return <Notes key={ note.id } note={ note } handleDelete={ handleDelete }/>
        });
    };
  
    return (
        <>
        <h2 className="mt-3">Notes</h2>
        <div>
            {renderNotes()}
        </div>
        </>
    );
}



export default NotesList;