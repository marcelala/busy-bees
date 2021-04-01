import { Input,Button, Container } from "@material-ui/core"

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
    <div className="rectangle">
        <div className="tracker-bar">
            <div className="heading">
                <h1>Where's my parcel?</h1>
            </div>
            <form onSubmit={trackPackage}>
                <label>
                    <div className="body-text-2">
                    Enter parcel number:   
                    </div>
                    <Input placeholder=" tracking number" 
                    value={parcelId}
                    onChange={(event) =>setParcelId(event.target.value)}>
                    </Input>
                    <Button className="tracker-button">Track parcel</Button>
                </label>
            </form>
        </div> 
    </div>
)}