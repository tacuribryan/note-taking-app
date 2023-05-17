import React, {useState, useEffect} from "react";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from "react-router-dom";

const NotePage = ({ match, history }) => {

  let noteId =  match.params.id
  let [note, setNote] = useState(null)
  useEffect(() => {
    getNote()
  }, [noteId])

  /* asynchronous  function that retrieves a specific note from the API based on the noteId*/
  let getNote = async () => {
    if (noteId === 'new') return
    let response = await fetch(`/api/notes/${noteId}`)  //Makes a GET Request to the API endpoint
    console.log(response)
    //Check response status
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json() //parse the response data as JSON 
    console.log(data)

    setNote(data) //Set the note state and re-renders the component with the updated note data
  }
  /* asynchronous function that sends a POST request to the API endpoint to create a new note */
  let createNote = async () => {
    fetch(`/api/notes/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
  }
  /* asynchronous function that sends a PUT request to the API endpoint to UPDATE a specific note from the API based on the noteId  */
  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
  }

  /* asynchronous function that sends a DELETE request to the API endpoint to DELETE a specific note from the API based on the noteId  */
  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    history.push('/')
  }

  /* This is called when the user takes an action that triggers the handling of the ntoe data. */
  let handleSubmit = () => {
    if(noteId !== 'new' && !note.title && !note.content) {
      deleteNote()
    } else if (noteId  !== 'new') {
      updateNote()
    } else if(noteId === 'new' && note !== null){
      createNote()
    }
    history.push('/')
  }
  /* Handles when the user modifies the title of the note */
  let handleTitleChange = (e) => {
    setNote({
      ...note,
      title: e.target.value
    })
  }

  /* Handles when the user modifies the content of the note */
  let handleContentChange = (e) => {
    setNote({
      ...note,
      content: e.target.value
    })
  }

  return(
    <div className="note">
      <div className="note-header">
        <h3>
            <ArrowLeft  onClick={handleSubmit}/>
        </h3>
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}> Done </button>
        )}
      </div>
      <input placeholder="Enter Title" type="text" value={note?.title || ''} onChange={handleTitleChange} />
      <textarea placeholder="Enter Body" value={note?.content || ''} onChange={handleContentChange}></textarea>
    </div>
  )

}

export default NotePage