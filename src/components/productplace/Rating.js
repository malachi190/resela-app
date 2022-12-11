import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IoStarHalfOutline } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

export const Rating = ({ value, text, color }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((rate) => (
        <span key={uuidv4()}>
          <i
            style={{ color }}
            className={
              value + 1 === rate + 0.5
                ? "fas fa star-half-alt"
                : value >= rate
                ? "fa fa-star"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
    </div>
  );
};

Rating.defaultProps = {
  color: "#FFA41C",
};
