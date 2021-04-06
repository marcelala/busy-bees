//npm packages
import Button from "@material-ui/core/Button";
import { useRecoilState } from "recoil";

//state
import { dataState } from "../state/dataState";

export default function Card({ parcel }) {
  //state
  const [data, setData] = useRecoilState(dataState);
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
        <div className="sender">Sender: {parcel.sender}</div>
        <Button onClick={stopTracking}> X </Button>
        <div className="status">{parcel.status}</div>
        <div className="last-updated">Last updated: {parcel.last_updated}</div>
        <div className="eta">Estimated time of arrival: {parcel.eta}</div>
        <div className="location-name">Location: {parcel.location_name}</div>
        <div className="delete">
        </div>
      </div>
    </article>
  );
}
