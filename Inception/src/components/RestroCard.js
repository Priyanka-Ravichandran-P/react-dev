import { CDN_URL } from "../utils/constant";
const RestroCard = (props) => {
    
    const {cloudinaryImageId, name, cuisines, sla, avgRating, costForTwo} = props?.data;
    const deliveryTime = sla.deliveryTime;
    return (
        <div className='restro-card'>
            <img className="restro-logo" alt='Food' src={CDN_URL+cloudinaryImageId}/>
            <h4 className ="restro-title">{name}</h4>
            <h5 className = 'cusines'>{cuisines.join(', ').substring(0,100)}</h5>
            <div className="extaInfo">
                <h5>{avgRating}</h5>
                <h5>{deliveryTime + ` MINS`}</h5>
                <h5>{costForTwo}</h5>
            </div>
            
            
        </div>
    )
}

export default RestroCard;