import { Input,Button, Container } from "@material-ui/core"

import { useState} from 'react';
import Card from "./Card"

export default function Tracker({match}){
    //const
    // const query = match.params.query;
    // const parcel= data.find((item) => item.parcel_id === query)
    // //state
    // const [query, setQuery] = useState("");
    //methods
    function trackParcel(event){
        event.preventDefault();//legacy for older browsers
        console.log(event)
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
                    // value={query}
                    // onChange={(event) =>setQuery(event.target.value)}
                    >
                    </Input>
                    <Button className="tracker-button">Track parcel</Button>
                </label>
            </form>
        </div> 
    </div>
)}