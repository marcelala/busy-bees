import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Card({data}) {
    return(
        <article className="card">
        <div className="card-container">
            <div className="parcel-id">Parcel ID {data.parcel_id}</div>
            <div className="sender">{data.sender}</div>
            <div className="status">{data.status}</div>
            <div className="last-updated">Last updated: {data.last_updated}</div>
            <div className="location_name">Pick-up location: {data.location_name}</div>
            {/* <div className="location_latitude">{data.location_coordinate_latitude}</div>
            <div className="longitude">{data.location_coordinate_longitude}</div> */}
            {/* ProgressBar */}
            <div className="view-details">
            {/* <Link to={'/details/${data.parcel_id}'}> <Button> View details</Button></Link> */}
            </div>
        </div>
        </article>
    )
}
