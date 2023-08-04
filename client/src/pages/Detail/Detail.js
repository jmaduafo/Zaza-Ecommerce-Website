import React from "react";
import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers"

function Detail(item) {
  const {
    _id,
    name,
    description,
    image,
    price,
    stock,
    bandSizes,
    cupSizes,
    colors
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={image}
        />
        <p>{name}</p>
      </Link>
      <div>
        <span>${price}</span>
        <span>${colors}</span>
        <span>${bandSizes}</span>
        <span>${cupSizes}</span>
        <p>${description}</p>

      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default Detail;
