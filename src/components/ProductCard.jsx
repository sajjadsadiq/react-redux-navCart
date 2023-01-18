import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actionCreators/productActions";
import { ADD_TO_CART } from "../redux/actionTypes/actionTypes";

const ProductCard = ({ product }) => {
  const { image, model, spec } = product;

  const dispatch = useDispatch();
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid silver",
        borderRadius: "6px",
        width: "320px",
      }}
    >
      <div>
        <img style={{ width: "100%" }} src={image} alt="" />
        <h2 style={{ textAlign: "center" }}>{model}</h2>
        <button
          onClick={() => dispatch(addToCart(product))}
          style={{
            width: "100%",
            borderRadius: "10px",
            background: "black",
            color: "white",
            padding: "16px 16px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
