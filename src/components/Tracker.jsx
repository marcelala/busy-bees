import { Input } from "@material-ui/core"
import { Button } from "@material-ui/core"

import { useState} from 'react';

export default function Tracker(){
//state
    const [parcelId, setParcelId] = useState("")
//methods
    function trackPackage(event){
        event.preventDefault();//legacy for older browsers
        console.log(event)
    }

    return (
    <div className="tracker-bar">
        <h1>Where's my parcel?</h1>
        <form onSubmit={trackPackage}>
            <label>
                Enter parcel number: 
                <Input placeholder=" tracking number" 
                value={parcelId}
                onChange={(event) =>setParcelId(event.target.value)}>
                </Input>
                <Button>Track parcel</Button>
            </label>
        </form>
    </div> 
)}