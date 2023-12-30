import { CDN_URL } from "../utils/constant";
const RestroCard = (props) => {
    
    const {cloudinaryImageId, name, cuisines, sla, avgRating, costForTwo} = props?.data;
    const deliveryTime = sla.deliveryTime;
    return (
        <div className='restro-card'>
            <img className="restro-logo" alt='Food' src={CDN_URL+cloudinaryImageId}/>
            <h4 className ="restro-title">{name}</h4>
            <h5 className = 'cusines'>{cuisines.join(', ')}</h5>
            <div className="extaInfo">
                <h6>{avgRating}</h6>
                <h6>{deliveryTime + ` MINS`}</h6>
                <h6>{costForTwo}</h6>
            </div>
            
            
        </div>
    )
}

export default RestroCard;