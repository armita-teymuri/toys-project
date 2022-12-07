import { GreenButton } from "../button/Button";
import Line from "../line/Line";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-text">
          <h2>Available for Free</h2>
          <div className="about-us-line"></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            exercitationem non libero temporibus perspiciatis ipsum asperiores
            distinctio, accusamus, molestias fugiat animi, nam rem ea repellat
            dolore facere earum eveniet a! Quisquam blanditiis est corrupti
            impedit cumque inventore, reiciendis alias animi?
          </p>
          <GreenButton>Get in Now</GreenButton>
        </div>
        <div className="about-us-img"></div>
      </div>
    </>
  );
};
export default AboutUs;
