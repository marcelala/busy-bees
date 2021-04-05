//npm packages
import React from "react";
import { Input, Button, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { dataState } from "../state/dataState";
import Card from "./Card";

export default function Tracker({ match }) {
  // constants
  const history = useHistory();
  // const routerID = match.params.query;
  // const parcel= data.find((item) => item.parcel_id === routerID)
  //state
  const [data, setData] = useRecoilState(dataState);
  const [query, setQuery] = useState("");
  //methods
  function trackParcel(event) {
    event.preventDefault(); //legacy for older browsers
    console.log("efore data");
    console.log(data);
    console.log(event);
    function validate(parcelId) {
      console.log(data.parcels.find((parcel) => parcel.parcel_id === parcelId));
      return !!data.parcels.find((parcel) => parcel.parcel_id === parcelId);
    }

    if (validate(query)) {
      setData({
        parcels: data.parcels,
        trackedParcelIds: [...data.trackedParcelIds, query],
      });
    }
  }

  return (
    <div className="rectangle">
      <div className="tracker-bar">
        <div className="heading">
          <h1>Where's my parcel?</h1>
        </div>
        <form onSubmit={trackParcel}>
          <label>
            <div className="body-text-2">Enter parcel number:</div>
            <Input
              placeholder=" tracking number"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            ></Input>
            <Button className="tracker-button" type="submit">
              Track parcel
            </Button>
          </label>
        </form>
      </div>
    </div>
  );
}
