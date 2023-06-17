import React,{useEffect,useContext}from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import {AuthContext, FirebaseContext} from './store/Context'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <Router>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/signup'>
      <Signup />
      </Route>
      <Route path='/login'>
      <Login/>
      </Route>
      <Route path='/create'>
      <Create/>
      </Route>
    </Router>
  );
}

export default App;
