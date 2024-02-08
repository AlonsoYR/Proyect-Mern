import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import NoteList from './components/NoteList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser';


function App() {
  return (
    <Router>
      
      <Navigation/>
      <Routes>
        <Route path='/' exact Component={NoteList}/>
        <Route path="/edit/:id" Component={CreateNote}/>
        <Route path="/create" Component={CreateNote}/>
        <Route path="/user" Component={CreateUser}/>
      </Routes>
    </Router>
  );
}

export default App;
