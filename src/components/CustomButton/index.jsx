import "./styles.css";

const CustomButton = ({ content, styleClass }) => {
  return (
    <button className={`${styleClass}`}>
      <span>{content}</span>
    </button>
  );
};
export default CustomButton;
