//npm packages
import React from "react";
import { Input, Button, Container } from "@material-ui/core";
import { useState } from "react";
import { useRecoilState } from "recoil";
//global state
import { dataState } from "../state/dataState";



export default function Tracker() {
  //state
    const [data, setData] = useRecoilState(dataState);
    const [query, setQuery] = useState("");
  //methods
    function trackParcel(event) {
        event.preventDefault(); //legacy for older browsers
        function validate(parcelId) {
        return !!data.parcels.find((parcel) => parcel.parcel_id === parcelId);
    }
    if (validate(query)) {
        setData({
        parcels: data.parcels,
        trackedParcelIds: [...data.trackedParcelIds, query],
    });
    }
}

function viewAllParcels(){
  let allParcelsIds = data.parcels.map(parcel => parcel.parcel_id);
  setData({ parcels:data.parcels,
            trackedParcelIds: allParcelsIds
  })
}


return (
    <div className= "rectangle">
      <div className="heading">
          <h1>Where are my parcels?</h1>
        </div>
      <div className="tracker-bar">
        <form onSubmit={trackParcel}>
          <label>
            <div className="body-text-2">Enter a parcel number:</div>
            <Container className="input-container">
            <Input
              placeholder=" tracking number"
              className="input"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            ></Input>
            </Container>
            <Button className="tracker-button" type="submit">
              Track parcel
            </Button>
            <Button className="view-all" onClick={viewAllParcels}> 
              View all parcels 
            </Button>
          </label>
        </form>
      </div>
    </div>
);}
