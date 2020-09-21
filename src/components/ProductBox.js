import React from "react";

export default function ProductBox(props) {
  return (
    <div className="product">
      <h3>{props.product}</h3>
      <img width="100" height="100" src={props.img} alt="phone pic" />
      <p>{props.price}</p>
    </div>
  );
}
