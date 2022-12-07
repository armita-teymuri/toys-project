import Line from "../line/Line";
import Product from "./Product";
import { useState } from "react";
import { LinkButton } from "../button/Button";

const ProductList = (props) => {
  const [lastProductData, setLastProductData] = useState([
    {
      id: 1,
      title: "my toy 1",
      description: "this is a my toy",
      img: "tedi.png",
      price: 2000,
    },
    {
      id: 2,
      title: "book2",
      description: "this is a my book2",
      img: "p2.png",
      price: 4000,
    },
    {
      id: 3,
      title: "book3",
      description: "this is a my book3",
      img: "p3.png",
      price: 8000,
    },
    {
      id: 4,
      title: "book3",
      description: "this is a my book3",
      img: "p4.png",
      price: 8000,
    },
  ]);
  const [papularProductData, setPapularProductData] = useState([
    {
      id: 1,
      title: "my toy 1",
      description: "this is a my toy",
      img: "wood-flower.png",
      price: 2000,
    },
    {
      id: 2,
      title: "book2",
      description: "this is a my book2",
      img: "w2.png",
      price: 4000,
    },
    {
      id: 3,
      title: "book3",
      description: "this is a my book3",
      img: "w3.png",
      price: 8000,
    },
    {
      id: 4,
      title: "book3",
      description: "this is a my book3",
      img: "w4.png",
      price: 8000,
    },
  ]);
  return (
    <>
      <div className="list">
        <h2>Last Product</h2>

        <Line></Line>
        <div className="p-list">
          {lastProductData.map((x) => (
            <Product data={x}></Product>
          ))}
        </div>
      </div>
      <div className="list">
        <h2>Papular Product</h2>
        <Line></Line>

        <div className="p-list">
          {papularProductData.map((x) => (
            <Product data={x}></Product>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
