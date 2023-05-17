import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    //getNotes() is called everytime the dependencies changes
    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        //Fetch data from API and then 
        let response = await fetch('/api/notes/')
        console.log(response)
        let data = await response.json()
        console.log(response)
        setNotes(data)
    }
  return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Notes</h2>
            <p className='notes-count'>{notes.length}</p>
        </div>
        <div className="notes-list">
            {notes.map((note, index) => (
                // <ListItem key={index} note={note} />
                <ListItem key={index} note={note} />
            ))}
        </div>
        <AddButton />
    </div>
  )
}

export default NotesListPage