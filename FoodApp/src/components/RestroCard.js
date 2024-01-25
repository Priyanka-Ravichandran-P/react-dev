import { CDN_URL } from "../utils/constant";
const RestroCard = (props) => {
  const { cloudinaryImageId, cuisines, sla, avgRating, costForTwo } =
    props?.data;
  const deliveryTime = sla.deliveryTime;
  let name = props?.data?.name;

  return (
    <div className="w-full">
      <img
        className="w-full h-60 rounded-md"
        alt="Food"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="m-1 text-lg font-bold py-2 h-14 w-">{name}</h4>
      <h5 className="w-fit text-md m-1 h-24">
        {cuisines.join(", ").substring(0, 100)}
      </h5>
      <div className="m-1 flex flex-wrap justify-between align-baseline h-6 font-semibold">
        <h5>{avgRating}</h5>
        <h5>{deliveryTime + ` MINS`}</h5>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};

/**
 * Higher Order Components takes a component and returns another component.
 * It does not change original component, instead returns new one by adding some toppings.
 * HOC are Pure Functions (means does not modify existing Components)
 */
export const isRestroOpen = (RestroCard) => {
  return (props) => {
    return (
      <div className="inline-flex w-full">
        <span className="left-0 h-4 w-5 mr-2 absolute my-2 bg-orange-800 rounded-sm">
          {" "}
        </span>
        <label className="h-6 absolute my-1 ml-1 bg-black text-white p-1 rounded-sm rounded-l-xl italic text-lg leading-none ">
          Serviceable{" "}
        </label>

        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
