import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useRecoilState } from "recoil";

//state
import { dataState } from "../state/dataState";

export default function Card({ parcel }) {
  //state
  const [data, setData] = useRecoilState(dataState);
  //const
  // const routerID= match.params.parcel_id;
  // const parcel= data.find( (item) => item.parcel_id === routerID);
  function stopTracking() {
    setData({
      parcels: data.parcels,
      trackedParcelIds: data.trackedParcelIds.filter(
        (id) => id != parcel.parcel_id
      ),
    });
  }
  return (
    <article className="card">
      <div className="card-container">
        <div className="parcel-id">Parcel ID {parcel.parcel_id}</div>
        <div className="sender">Sender: {parcel.sender}</div>
        <div className="status">Current status: {parcel.status}</div>
        <div className="last-updated">Last updated: {parcel.last_updated}</div>
        <div className="location_name">
          Pick-up location: {parcel.location_name}
        </div>
        {/* <div className="location_latitude">{data.location_coordinate_latitude}</div>
            <div className="longitude">{data.location_coordinate_longitude}</div> */}
        {/* ProgressBar */}
        <div className="view-details">
          <Button onClick={stopTracking}> X</Button>
        </div>
      </div>
    </article>
  );
}
