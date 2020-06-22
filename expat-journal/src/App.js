import React, { useState } from 'react';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/Login'
import Home from './components/Home'
import PrivateRoute from './utils/PrivateRoute'

const initalCredentials = {
  username: '',
  password: ''
}

function App() {

  const [ credentials, setCredentials ] = useState(initalCredentials)


  return (
   <div>
     <ul>
       <li>
         <Link to='/login'>Login</Link>
       </li>
       <li>
         <Link to='/home'>Home</Link>
       </li>
     </ul>

     <Switch>
          <Route path='/login' component={Login}>
              <Login credentials={credentials} setCredentials={setCredentials}/>
          </Route>

          <PrivateRoute path='/home' component={Home}/>
    </Switch>
   </div>
  )
}

export default App;
