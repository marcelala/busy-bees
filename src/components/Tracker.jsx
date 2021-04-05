//npm packages
import React from "react";
import { Input,Button, Container } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { useState} from 'react';
import { useRecoilState } from "recoil";

import {dataState} from "../state/dataState"
import Card from "./Card"


export default function Tracker({match}){
    // constants
    const history = useHistory();
    // const routerID = match.params.query;
    // const parcel= data.find((item) => item.parcel_id === routerID)
    //state
    const parcels= useRecoilState(dataState);
    const [query, setQuery] = useState("");
    //methods
    function trackParcel(event){
        event.preventDefault();//legacy for older browsers
        const trackedParcel= parcels.filter((item) =>
            item.parcel_id.match(query));
        addCardToArray(trackedParcel);
        console.log(event)
    }

    function addCardToArray(trackedParcel){

    }

    return (
    <div className="rectangle">
        <div className="tracker-bar">
            <div className="heading">
                <h1>Where's my parcel?</h1>
            </div>
            <form onSubmit={trackParcel}>
                <label>
                    <div className="body-text-2">
                    Enter parcel number:   
                    </div>
                    <Input placeholder=" tracking number" 
                    value={query}
                    onChange={(event) =>setQuery(event.target.value)}
                    >
                    </Input>
                    <Button className="tracker-button" type="submit">Track parcel</Button>
                </label>
            </form>
        </div> 
    </div>
)}