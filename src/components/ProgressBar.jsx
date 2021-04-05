import { LinearProgress } from '@material-ui/core';
import { useRecoilState } from "recoil";

//state
import { dataState } from "../state/dataState";
export default function ProgressBar({ parcel }) {
    //state
    const [data, setData] = useRecoilState(dataState);

    return (
        <article className="progress-bar">
            <div className="bar-container">

        <LinearProgress variant="determinate" value={parcel.status} />        

            </div>
        </article>



/**
 * order info received
 * on-the way
 * ready-for-pickup
 * delivered
 */