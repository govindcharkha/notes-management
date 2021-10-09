import React from 'react';
import Note from './Note';
import AddNewNote from './AddNewNote';

const NoteList = ({ note, handleAddNote, handleDeleteNote, handleUpdateNote }) => {
    return (
        <div className='note-list'>
            {
                //Applying map method to note array to print each single note
                note.map((note) =>
                    <div className='note-list' key={note.id}>
                        <Note id={note.id}
                            text={note.text}
                            date={note.date}
                            handleDeleteNote={handleDeleteNote}
                            handleUpdateNote={handleUpdateNote}
                        />
                    </div>)
            }

            {/* Adding new note */}
            <AddNewNote handleAddNote={handleAddNote}></AddNewNote>
        </div>
    )
}

export default NoteList
