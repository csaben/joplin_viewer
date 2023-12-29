import React from 'react';
import { useParams } from 'react-router-dom';
import useNotes from './useNotes';

const NoteDetail = () => {
    const { noteId } = useParams();
    const notes = useNotes();
    const note = notes.find(n => n.id.toString() === noteId);

    return (
        <div>
            {note ? <div dangerouslySetInnerHTML={{ __html: note.html }}></div> : <p>Note not found</p>}
        </div>
    );
};

export default NoteDetail;
