import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Card({data}) {
    return(
        <article className="card">
            <h3>≤{data.parcel_id}</h3>
            <h2>{data.status}</h2>
            <h6>{data.last_updated}</h6>
            <h4>{data.sender}</h4>
            {/* ProgressBar */}
            <Link to={'/details/${data.parcel_id}'}> <Button> View details</Button></Link>
        </article>
    )
}
