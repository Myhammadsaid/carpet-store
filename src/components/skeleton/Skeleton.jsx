import React from "react";
import "./Skeleton.scss";

const Skeleton = () => {
  return (
    <>
      <div className="skeleton__cards">
        {Array(5)
          .fill("")
          .map((_, inx) => (
            <div key={inx} className="skeleton__card">
              <div className="skeleton__card__img"></div>
              <div className="skeleton__card__text"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Skeleton;
