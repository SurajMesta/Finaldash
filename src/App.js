import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Salesdash from './components/Salesdash'
import Main from './components/Main'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
 
      <Router>

      <Topbar/>
     <Navbar/>
     <Main/>
     <Footer/>
   
        </Router>
     
      
      </React.Fragment>
 
    )
  }
}

export default App;
