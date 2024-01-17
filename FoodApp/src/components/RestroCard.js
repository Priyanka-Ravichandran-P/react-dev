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

/**
 * Higher Order Components takes a component and returns another component.
 * It does not change original component, instead returns new one by adding some toppings.
 * HOC are Pure Functions (means does not modify existing Components)
 */
export const isRestroOpen= (RestroCard) => {
  return (props) => {
    return (
    <div>
      <label className="servicable-card">Serviceable </label>
      <RestroCard {...props} />
    </div>);
  };
};


export default RestroCard;