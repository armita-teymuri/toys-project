import "./Icon.css";
const Icon = (props) => {
  return (
    <>
      <i class={"fa fa-" + props.children + " icon"}></i>
    </>
  );
};
const OneIcon = (props) => {
  return (
    <>
      <div className="story-icon">
        <i class={"fa fa-" + props.children + " icon"}></i>
      </div>
    </>
  );
};
export { Icon, OneIcon };
