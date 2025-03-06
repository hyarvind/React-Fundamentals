import { useState } from "react";
export default function LikeButton(){

    let [isLiked ,setIsLiked] =useState(false);
    let [clicks ,setClicks] =useState(0);
    let toggleLike =()=>{
      setIsLiked(!isLiked);
      setClicks(clicks+1);
    };
  let likestyle ={ color: "red"};
    return (
        <div>
            <p>Clicks = {clicks}</p>
            <p  onClick={toggleLike} >
                {isLiked ? (
                    <i class="fa-solid fa-heart " style={likestyle} ></i>
                ): (
           <i className="fa-regular fa-heart"></i>
       ) }
           </p>
        </div>
    )
}