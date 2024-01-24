import { CDN_URL } from "../utils/constant";
import { IMAGE_NOT_FOUND, STAR_IMG_SRC } from "../utils/constant";
import { useState } from "react";

const MenuItem = ({ data }) => {
  const info = data?.card?.info;
  const [isAddBtnShow, setAddBtnShow] = useState(true);
  return (
    <div className="p-4 flex justify-between">
      <div className="w-9/12 mr-2">
        <h3 className="font-bold text-md">{info.name}</h3>
        <h4 className="font-semibold text-md">{`₹ ${
          info.price / 100 || info.defaultPrice / 100
        }`}</h4>
        <h5 className="text-md text-gray-600">{info.description}</h5>
      </div>
      <div className="flex flex-col relative">
        <div className="rounded">
          {info?.imageId ? (
            <div className="relative">
              <img className="overflow-y-hidden size-36" alt="Food" src={CDN_URL + info?.imageId} />
              {isAddBtnShow ? (
                <button
                  className="absolute w-12 align-middle bottom-0 right-12  ml-auto mr-auto
                                  rounded-lg font-bold bg-black text-white"
                  onClick={()=>{setAddBtnShow(false)}}>
                ADD
                </button>
              ) : (
                <div
                  className="absolute w-30 bottom-0 right-7 ml-auto mr-auto flex flex-wrap 
                                  rounded-lg font-bold bg-gray-600  text-white">
                
                  <button className=" w-6 left-0  hover:text-red-600">-</button>
                  <div className=" w-12 left-1/2 text-center hover:text-green-600"> 0 </div>
                  <button className=" w-6 right-0  hover:text-green-600"> + </button>
                
                </div>
              )}
            </div>
          ) : (
            <img className="size-36" alt="Food" src={IMAGE_NOT_FOUND} />
          )}
        </div>

        {info?.ratings?.aggregatedRating?.rating ? (
          <div className="inline-flex justify-center p-2 m-1">
            <span>
              <img className="w-5 h-5" alt="Food" src={STAR_IMG_SRC} />
            </span>
            <span className="ml-1">{info.ratings.aggregatedRating.rating}</span>
          </div>
        ) : (
          <h4></h4>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
