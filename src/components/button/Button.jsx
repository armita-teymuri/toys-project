import "./Button.css";
import { Link } from "react-router-dom";
const GreenButton = (props) => {
  return (
    <>
      <button className="my-btn green-btn">{props.children}</button>
    </>
  );
};
const WhiteButton = (props) => {
  return (
    <>
      <button className="my-btn white-btn">{props.children}</button>
    </>
  );
};
const LinkButton = (props) => {
  return (
    <>
      <Link className="link-btn" to="">
        {props.children}
      </Link>
      <i className="fa fa-home"></i>
    </>
  );
};
export { GreenButton, WhiteButton, LinkButton };
