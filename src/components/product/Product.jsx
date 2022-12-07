import { GreenButton } from "../button/Button";
import "./Product.css";
const Product = ({ data }) => {
  return (
    <>
      <div className="p-container">
        <div
          className="product-img"
          style={{ backgroundImage: `url('/media/${data.img}')` }}
        ></div>
        <span>{data.title}</span>
        <GreenButton>{data.price + "$"}</GreenButton>
      </div>
    </>
  );
};
export default Product;
