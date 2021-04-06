//npm packages
import Button from "@material-ui/core/Button";
import { useRecoilState } from "recoil";
//global state
import { dataState } from "../state/dataState";

export default function Card({ parcel }) {
  //global state
  const [data, setData] = useRecoilState(dataState);

  //constants
  

//methods
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
        <Button onClick={stopTracking}> x </Button>
        <div className="sender">From <br/> {parcel.sender}</div>
        <div className="status">{parcel.status}</div>
        <div className="location-name">Location: {parcel.location_name}</div>
        <div className="eta">Scheduled delivery: {parcel.eta}</div>
        <div className="last-updated">Last updated: {parcel.last_updated}</div>
      </div>
    </article>
  );
}
