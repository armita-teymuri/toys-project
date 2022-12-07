import { OneIcon } from "../myIcons/Icon";
import { GreenButton } from "../button/Button";
import { useEffect, useState } from "react";
import "./Subscribe.css";
const Subscribe = () => {
  const [emailSubscribe, setEmailSubscribe] = useState(
    "Enter Your Email Address"
  );
  return (
    <>
      <div className="subscribe-container">
        <div className="subscribe-col subscribe-col1">
          <OneIcon>home</OneIcon>
          <h5>
            Subscribe to our newslatter <br /> & get <span>10% discount!</span>
          </h5>
        </div>
        <div className="subscribe-col2 subscribe-col">
          <div className="text-input">
            <input
              placeholder={emailSubscribe}
              type="text"
              onInput={(e) => setEmailSubscribe(e.target.value)}
            />
          </div>

          <GreenButton>Subscribe</GreenButton>
        </div>
      </div>
    </>
  );
};
export default Subscribe;
