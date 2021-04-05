import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
//state
import { dataState } from "../state/dataState";
//component
import Card from "./Card";

export default function TrackedParcels() {
  //global state
  const [data, _] = useRecoilState(dataState);
  //array of tracked parcels

  console.log("TrackedParcel");
  console.log(data);
  return data.parcels
    .filter((parcel) => {
      return data.trackedParcelIds.includes(parcel.parcel_id);
    })
    .map((parcel) => <Card key={parcel.parcel_id} parcel={parcel} />);
}
