import React from 'react'
import { Link } from 'react-router-dom'

/* trimps title to 45 chars  to use in List*/
let getTitle = (note) => {
  let title =  note.title.split('\n')[0]
  if (title.length > 45) {
    return title.slice(0,45) + '...'
  }
  return title
}
/* Trims the content to 45 chars to use in list */
let getContent = (note) => {
  let title =  note.content.split('\n')[0]
  if (title.length > 45) {
    return title.slice(0,45) + '...'
  }
  return title
}

/* gets the date and time the note was created or updated */
let getTime = (note) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Date(note.updated).toLocaleString(undefined, options);
}

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className='notes-list-item'>
        {/* <h1>{note.title}</h1>
        <h3>{note.content}</h3> */}
        <h3>{getTitle(note)}</h3>
        <h3>{getContent(note)}</h3>
        <p><span>{getTime(note)}</span> </p>
      </div>
    </Link>
  )
}

export default ListItem