import { CDN_URL } from "../utils/constant";
import { IMAGE_NOT_FOUND, STAR_IMG_SRC } from "../utils/constant";
const MenuItem = ({data}) => {
    const info = data?.card?.info;
    return (
      <div className="p-4 flex justify-between">
       <div>
       <h3 className="font-bold text-md">
            {info.name}
        </h3>
        <h4 className="font-semibold text-md">{`₹ ${
            info.price / 100 || info.defaultPrice / 100
          }`}</h4>
          <h5 className="text-md text-gray-600">
            {info.description}
          </h5>
        </div>                            
        <div className="flex flex-col">
          <div className="size-36 rounded">
            {info?.imageId ? (
              <img
                alt="Food"
                src={CDN_URL + info?.imageId}
              />
            ) : (
              <img
                alt="Food"
                src={IMAGE_NOT_FOUND}
              />
            )}
          </div>
  
          {info?.ratings?.aggregatedRating?.rating ? (
            <div className="inline-flex justify-center p-2">
              <span>
                <img
                  className="w-5 h-5"
                  alt="Food"
                  src={STAR_IMG_SRC}
                />
              </span>
              <span className="ml-1">
                {info.ratings.aggregatedRating.rating}
              </span>
            </div>
          ) : (
            <h4></h4>
          )}
        </div>
      </div>
    );
  }

  export default MenuItem;