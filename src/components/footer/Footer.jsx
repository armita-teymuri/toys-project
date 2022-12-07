import Menu from "../menuBar/Menu";
import IconList from "../myIcons/IconList";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-menu">
          <h5>ToyStore</h5>
          <Menu></Menu>
          <IconList></IconList>
        </div>

        <hr />
        <div className="create-by">
          <h6>Created with Love by Elastic Themes</h6>
          <h6>
            Powered by <u>webflow</u>
          </h6>
        </div>
      </div>
    </>
  );
};
export default Footer;
