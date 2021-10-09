import React, { useState } from 'react'

const AddNewNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    //Setting character limit
    const charNoteLimit = 200;

    const textChangeHandler = (e) => {
        //Providing validation : user cannot enter more than charNoteLimit
        if (charNoteLimit - e.target.value.length >= 0)
            setNoteText(e.target.value);
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            //Once the note is added, setting content back to empty
            setNoteText('')
        }
    }

    return (
        <div className='note new'>
            Add Note Content<textarea
                rows='8'
                cols='10'
                placeholder='Click here to add note content...'
                value={noteText}
                onChange={textChangeHandler}
            ></textarea>
            <div className='note-footer'>
                {/* User validation : providing user with number of remaining characters */}
                <small>Add upto <b>{charNoteLimit - noteText.length}</b> characters....</small>
                <button className='save' onClick={handleSaveClick} >Add Note</button>
            </div>
        </div>
    )
}

export default AddNewNote;
