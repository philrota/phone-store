import React from "react";
import "./App.css";
import { collect } from "./actions/collect";
import {
  useDispatch as uDispatch,
  useSelector as uSelector,
} from "react-redux";
import ProductBox from "./components/ProductBox";
import { useEffect } from "react";
const axios = require("axios").default;
export default function App() {
  const dispatch = uDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3030/api/phones")
      .then((res) => dispatch(collect(res.data))); // res.data === [{},{}...]
  }, []);

  const productList = uSelector((state) => state);

  return (
    <div id="container">
      {productList.map((el) => (
        <ProductBox product={el.product} img={el.img} price={el.price} />
      ))}
    </div>
  );
}
