import React, { useState, useEffect } from 'react'
import './styles/App.css';
import 'fontsource-roboto';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';


//components
import Tracker from './components/Tracker';
// import Card from './components/Card';
// import Map from './components/Map';
// import ProgressBar from './components/Progressbar';



function App() {
  const[data, setData] = useState('parcel_id')
  useEffect(()=> {
    fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840')
      .then(response => response.json())
      .then (json=>console.log(json))
  },[data])

  return (
    <div className="App">
      <header className="App-header">
        <img src='./assets/logo.png' className="App-logo" alt="logo" />
      </header>
      <Tracker/>
      /* cards */
    </div>
  );
}

export default App;
