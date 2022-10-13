import React, { useState } from 'react'
//import { AiFillDelete } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {FiEdit} from "react-icons/fi"
import './pop.css'
import 'reactjs-popup/dist/index.css';
function Note({title,content,onDelete,id,onUpdate}) {
  const [editNote, setEditNote] = React.useState(false);
  const [modal,setModal] =useState(false);
  const toggleModal =() =>{
    setModal(!modal)
  }
  const [currentNote, setCurrentNote] = React.useState({
    id,
    editTitle: title,
    editContent: content,
  });

  const handleInputEdit = (event) => {
    const { name, value } = event.target;
    setCurrentNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  


  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setEditNote(true);
    setCurrentNote((prevValue) => ({ ...prevValue }));
  };

  function pinNote(id) {
    this.setState({
      ...this.state,
      pinned_id: id
    });
  }
  function  removePin() {
    this.setState({
      ...this.state,
      pinned_id: null
    });
  }  
  

  const updateNote = () => {
    onUpdate({
      id: currentNote.id,
      title: currentNote.editTitle,
      content: currentNote.editContent
    });
    setEditNote(false);
  };

 

  
  return (
    <div className='notes'>
    
      {editNote ? (
        <div >
          <input 
            type='text'
            name='editTitle'
            defaultValue={currentNote.editTitle}
            onChange={handleInputEdit}
            className='edit-input'
          />
          <textarea
            name='editContent'
            defaultValue={currentNote.editContent}
            row='5'
            onChange={handleInputEdit}
            className='edit-input'
          />
          <button onClick={() => setEditNote(false)}>Cancel</button>
          <button onClick={updateNote}>Save</button>
        </div>
      ) : (
        <div  >
            <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={handleDelete}><MdDelete size ={20}></MdDelete></button>
          <button onClick={() =>{handleEdit(); toggleModal()}}><FiEdit size= {20}></FiEdit></button>
          
        </div>
      )}
    </div>
  )

}



  

export default Note
