import Images from "../myImage/Images";
import "./Instagram.css";
import { useState } from "react";
import { GreenButton } from "../button/Button";
const Instagram = () => {
  const [instagramImage, setInstagramImage] = useState([
    {
      title: "toy1",
      description: "this is a my toy1",
      img: "i1.jpg",
    },
    {
      title: "Toy2",
      description: "this is a my Toy2",
      img: "i2.jpg",
    },
    {
      title: "Toy3",
      description: "this is a my Toy3",
      img: "i3.jpg",
    },
    {
      title: "Toy4",
      description: "this is a my Toy4",
      img: "i4.jpg",
    },
    {
      title: "Toy5",
      description: "this is a my Toy5",
      img: "i5.jpg",
    },
    {
      title: "Toy6",
      description: "this is a my Toy6",
      img: "i6.jpg",
    },
  ]);
  return (
    <>
      <div className="instagram-contaoiner">
        <h5>@ElasticThemes</h5>
        <h3>we are on Instagram!</h3>
        <div className="instagram-img-container">
          {instagramImage.map((img) => (
            <Images data={img}></Images>
          ))}
        </div>
        <GreenButton>See Morte Photos</GreenButton>
      </div>
    </>
  );
};
export default Instagram;
