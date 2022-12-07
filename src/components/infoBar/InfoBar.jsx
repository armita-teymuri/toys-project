import IconList from "../myIcons/IconList";
import "./InfoBar.css";
const InfoBar = () => {
  return (
    <>
      <div className="info-bar">
        <div>
          <span>Call Us: +1 213 974-5898</span>
          <span>Email: </span>
          <a href="mailto:webmaster@example.com"> toystore@template.com</a>
        </div>
        <div>
          <IconList></IconList>
        </div>
      </div>
    </>
  );
};
export default InfoBar;
