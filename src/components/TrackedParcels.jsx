import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
//state
import { dataState } from "../state/dataState";
//component
import Card from "./Card";

export default function TrackedParcels() {
  //global state
  const [data, _] = useRecoilState(dataState);
  //array of tracked parcels
  return data.parcels
    .filter((parcel) => {
      return data.trackedParcelIds.includes(parcel.parcel_id);
    })
    .map((parcel) => <Card key={parcel.parcel_id} parcel={parcel} />);
}
