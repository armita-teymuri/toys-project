import BannerBox from "../banner/BannerBox";
import Button, { WhiteButton } from "../button/Button";
import "./BoxList.css";
const BoxList = () => {
  return (
    <>
      <div className="box-list">
        <div className="my-box box1">
          <div className="box1-image"></div>
          <div className="box1-info">
            <h5>Stuffed Animals</h5>
            <WhiteButton>Shop Now</WhiteButton>
          </div>
        </div>
        <div className="my-box box2">
          <div className="box2-image"></div>
          <div className="box2-info">
            <h5>Wooden Toys</h5>
            <WhiteButton>Shop Now</WhiteButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default BoxList;
