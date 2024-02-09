import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js' 
import {Link} from 'react-router-dom';

export default class NoteList extends Component {

  state= {
      notes: []

  }
  
  componentDidMount(){
    
    this.getNotes();
  } 

  async getNotes(){
    const res = await axios.get('http://localhost:4000/notes')
    this.setState({notes: res.data})
  }

  deleteNote = async (id) => {
    await axios.delete('http://localhost:4000/notes/' + id);
    this.getNotes();
  }

  render() {
    return (
      <div className="row">
          {
              this.state.notes.map(notes => (
                <div className="col-md-4 p-2" key={notes._id}>
                  <div className="card">
                    <div className="card-header d-flex justify-content-between">
                      <h5>{notes.title}</h5>
                      
                        <Link className='btn btn-secondary' to={"/edit/" + notes._id}>
                        Edit
                        </Link>
                    </div>
                    <div className="card-body">
                      <p>{notes.content}</p>
                      <p>{notes.author}</p>
                      <p>{format(notes.date)}</p>
                    </div>
                    <div className="card-footer">
                      <button className='btn btn-danger ms-auto' onClick={() => this.deleteNote(notes._id)}>
                        Delete
                        </button>
                    </div>
                  </div>
                </div>
              ))
          }
      </div>
    )
  }
}
