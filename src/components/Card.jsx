//npm packages
import Button from "@material-ui/core/Button";
import { LinearProgress } from '@material-ui/core';
//import ProgressBar from './components/Progressbar';
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
        <div className="status">Current status: {parcel.status}</div>
        <div className="last-updated">Last updated: {parcel.last_updated}</div>
        <div className="eta">Estimated time of arrival: {parcel.eta}</div>
        <div className="location_name">Pick-up location: {parcel.location_name}</div>
        <div className="delete">
          <Button onClick={stopTracking}> X </Button>
        </div>
      </div>
    </article>
  );
}
