import React, { useState } from 'react';
import './App.css';

import Login from './components/Login'

const initalCredentials = {
  username: '',
  password: ''
}

function App() {

  const [ credentials, setCredentials ] = useState(initalCredentials)



  return (
   <div>
     <Login credentials={credentials} setCredentials={setCredentials}/>
   </div>
  )
}

export default App;
