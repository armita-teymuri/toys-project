import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <Link to="">Category</Link>
          </li>
          <li>
            <Link to="">Delivary</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
