import React from "react";

function CardsMobile(props) {
  return (
    <div className="col-md my-5">
      <img className="img-thumbnail" src={props.img} alt="" />
      <p className="fs-1 mt-3 lh-sm">{props.title}</p>
    </div>
  );
}

export default CardsMobile;
