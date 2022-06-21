import React from 'react';
import './App.scss';
import {Routes,Route, Link } from 'react-router-dom'

import Home from './pages/home/Home'
import CreatePost from './pages/createPost/CreatePost'
import Login from './pages/login/Login'

function App() {
  return (
    <>
      <nav className='header_nav'>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>Create Post</Link>
        <Link to='/login'>Login</Link>
      </nav>
    <Routes>

      <Route path='/' element = {<Home />} /> 
      <Route path='/createpost' element = {<CreatePost />} /> 
      <Route path='/login' element = {<Login />} /> 
    </Routes>
    </>
      
  );
}

export default App;
