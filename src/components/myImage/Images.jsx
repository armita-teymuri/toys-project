import "./Images.css";
const Images = ({ data }) => {
  return (
    <>
      <div
        className="my-image"
        style={{ backgroundImage: `url('/media/${data.img}')` }}
      ></div>
    </>
  );
};
export default Images;
