export default function Main({data}){

    const parcelsArray = data.map((item)=> <li> key{item.parcel_id>{item.sender}</li>});

    return(
        <div>
            <h1>Your parcels</h1>

           <span> parcelsArray</span>
        
        
        
        </div>
    )

}