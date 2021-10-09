import React from 'react';

const Note = ({ id, text, date, handleDeleteNote, handleUpdateNote }) => {
    return (
        <div className='note' >
            <span>{text}</span>

            <div className='note-footer'>
                <button className='save' onClick={() => handleUpdateNote(id)}>Update Note</button>
                {date}
                <button className='save' onClick={() => handleDeleteNote(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Note;
