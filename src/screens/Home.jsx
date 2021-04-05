//npm packages
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
//components
import Card from "../components/Card";
import Tracker from "../components/Tracker";
//state
import { dataState } from "../state/dataState";

export default function Home() {
  //global state
  const [data, setData] = useRecoilState(dataState); //array to hold the parcel list
  //constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  console.log("ASDASDASD");
  console.log(data);
  let Cards;

  //state
  const [status, setStatus] = useState(0); //0 loading data, 1 error getting data, 2 data loaded

  //methods

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch(onFetchFail);
  }, [setData, setStatus]);

  function onFetchSuccess(json) {
    setData({
      parcels: json,
      trackedParcelIds: data.trackedParcelIds,
    });
    setStatus(2);
  }

  function onFetchFail(error) {
    console.error("we have a problem loading the parcels", error);
    setStatus(1);
  }

  return (
    <div className="container">
      {status === 0 && <p>Loading</p>}
      {status === 1 && <p>Error</p>}
      {status === 2 && <p>Data loaded</p>}
      {/*<div className="grid">{Cards}</div>*/}
    </div>
  );
}
