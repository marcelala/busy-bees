// npm files
import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'fontsource-roboto';


//project files
import './styles/App.css';

//components
import Tracker from './components/Tracker';
import Card from './components/Card';
// import Map from './components/Map';
// import ProgressBar from './components/Progressbar';

function App() {
  //constant
  const API_URL = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';
//state
  const [status,setStatus]= useState(0);//0 loading data, 1 error getting data, 2 data loaded
  const[data, setData] = useState([]);//array to hold the parcel list
  
  const fetchData= async () =>{
    const fetchedData = await fetch(API_URL);
    const data = await fetchedData.json();
    console.log(data);
    setData(data);
  }

  //methods
  useEffect(()=> {
    fetchData()
      .then (setStatus(2))
      .catch(onFetchFail);
  },[setData,setStatus]);
  
  const Cards= data.map((item) => (
    <Card key = {item.parcel_id} data= {item}/>
  ));
  
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
      <Container><Tracker/></Container>
      <Container>
      <Grid container spacing = {2}>
      <div className="grid">{Cards}</div>
      {/* < Route path="./details" component={Details}/> */}
      </Grid>
      </Container>
    </div>
    </Router>
  );
}

export default App;
