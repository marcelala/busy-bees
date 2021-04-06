//npm packages
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Input, Button, Container } from "@material-ui/core";
//state
import { dataState } from "../state/dataState";
import Card from "../components/Card"
export default function Home() {
  //global state
  const [data, setData] = useRecoilState(dataState); //array to hold the parcel list
  //constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  console.log(data);
  let allParcels= data.parcels.map((parcel) => <Card key={parcel.parcel_id} parcel={parcel} />);

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
  function viewAllParcels(){
    return allParcels;
  }

  return (
    <div className="container">
      {status === 0 && <p>Loading</p>}
      {status === 1 && <p>Error</p>}
      {status === 2 }
    </div>
);}
