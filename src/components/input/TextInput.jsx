import "./TextInput.css";
import { useEffect, useState } from "react";
const TextInput = (props) => {
  const [emailSubscribe, setEmailSubscribe] = useState(
    "Enter Your Email Address"
  );
  useEffect(() => {
    //its a callback
    console.log("Each Render");
  });

  useEffect(() => {
    console.log("First Render");
  }, []);

  useEffect(() => {
    console.log("Name Changed");
  }, [emailSubscribe]);
  return (
    <>
      <div className="text-input">
        <input
          placeholder={emailSubscribe}
          type="text"
          value={emailSubscribe}
          onInput={(e) => setEmailSubscribe(e.target.value)}
        />
      </div>
    </>
  );
};
export { TextInput };
