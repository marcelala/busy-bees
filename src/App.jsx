import React, { useState, useEffect } from 'react'
import './styles/App.css';
import 'fontsource-roboto';
// import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//components
import Tracker from './components/Tracker';
// import Card from './components/Card';
// import Map from './components/Map';
// import ProgressBar from './components/Progressbar';



function App() {
  const API_URL = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

  const [status,setStatus]= useState(0);//0 loading data, 1 error getting data, 2 data loaded
  const[data, setData] = useState([]);//array to hold the parcel list
  const fetchData= async () =>{
    const fetchedData = await fetch(API_URL);
    const data = await fetchedData.json();
    console.log(data);
    setData(data);
  }
  useEffect(()=> {
    fetchData()
      // .then (onFetchSuccess)
      .catch(onFetchFail);
  },[]);

  
  // useEffect(()=> {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then (onFetchSuccess)
  //     .catch(onFetchFail);
  // },[setData, setStatus])

  // function onFetchSuccess(json){
  //   // setData(json);
  //   setStatus(2);
  //   console.log(json);
  // }
  function onFetchFail(error){
    console.error('we have a problem loading the parcels',error);
    setStatus(1);
  }

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src='./assets/logo.png' className="App-logo" alt="logo" />
      </header>
      {status===0 && <p>Loading</p>}
      {status===1 && <p>Error</p>}
      {status===2 && <p>Data loaded</p>}
      
      <Tracker/>
      /* cards */

      {data.map(item => (
        <h1 key = {item.parcel_id}>{item.sender}</h1>
        ))}
      {/* < Route path="./details" component={Details}/> */}

    </div>
    </Router>
  );
}

export default App;
