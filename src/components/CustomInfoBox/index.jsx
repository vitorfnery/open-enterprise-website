import "./styles.css";

const CustomInfoBox = ({ content, styleClass }) => {
  return (
    <div className={`${styleClass}`}>
      <span>{content}</span>
    </div>
  );
};
export default CustomInfoBox;
