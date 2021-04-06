import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
//state
import { dataState } from "../state/dataState";
//component
import Card from "./Card";

export default function CardList() {
  //global state
  const [data, _] = useRecoilState(dataState);
  
  return data.parcels
    .map((parcel) => <Card key={parcel.parcel_id} parcel={parcel} />);
      }