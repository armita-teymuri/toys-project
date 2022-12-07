import Menu from "./Menu";
import InfoBar from "../infoBar/InfoBar";
import "./Menu.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="d-flex">
          <span>ToyStore</span>
          <Menu></Menu>
        </div>

        <div className="card-icon">
          <span>Cart</span>
          <img src="/media/cart.icon.svg"></img>
        </div>
      </div>
    </>
  );
};
export default Navbar;
