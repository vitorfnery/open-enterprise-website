import "./styles.css";

const CustomButton = ({ content, styleClass, onClick }) => {
  return (
    <button className={`${styleClass}`} onClick={onClick}>
      <span>{content}</span>
    </button>
  );
};
export default CustomButton;
