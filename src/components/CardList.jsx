import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
//state
import { dataState } from "../state/dataState";
//component
import Card from "./Card";

export default function CardList() {
  //global state
  const [data, _] = useRecoilState(dataState);
  const allCards= data.map((parcel) => <Card key={parcel.parcel_id} parcel={parcel} />);
  //array of tracked parcels

      return(
      allCards
      )}