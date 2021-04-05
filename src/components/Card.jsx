import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useRecoilState } from "recoil";

//state
import {dataState} from "../state/dataState"

export default function Card({match}) {
    //state
    const data = useRecoilState(dataState);
    //const
    // const routerID= match.params.parcel_id;
    // const parcel= data.find( (item) => item.parcel_id === routerID);

    return(
        <article className="card">
        <div className="card-container">
            <div className="parcel-id">Parcel ID {data.parcel_id}</div>
            <div className="sender">Sender: {data.sender}</div>
            <div className="status">Current status: {data.status}</div>
            <div className="last-updated">Last updated: {data.last_updated}</div>
            <div className="location_name">Pick-up location: {data.location_name}</div>
            {/* <div className="location_latitude">{data.location_coordinate_latitude}</div>
            <div className="longitude">{data.location_coordinate_longitude}</div> */}
            {/* ProgressBar */}
            <div className="view-details">
            <Link to={'/details/${data.parcel_id}'}> <Button> View details</Button></Link>
            </div>
        </div>
        </article>
    )
}
