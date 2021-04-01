export default function Card({item}) {
    const{sender, status, parcel_id, last_updated}= item;
    return(
        <article className="card">
            <h3>≤{parcel_id}</h3>
            <h2>{status}</h2>
            <h6>{last_updated}</h6>
            <h4>{sender}</h4>
            <Button>View details</Button>
        </article>
    )
}
/**
 * sender
 * status
 * location pick up
 * parcel id
 * eta
 * latest update?
 * verification required
 * map
 */