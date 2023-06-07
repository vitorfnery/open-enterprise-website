import CustomInfoBox from "../CustomInfoBox";
import "./styles.css";

const TasksCard = ({ title, content, info, date }) => {
  return (
    <div className="tasks__card flex flex-col font-robotoMono text-dark-charcoal leading-6">
      <h6 className="font-bold text-lg mb-4">{title}</h6>
      <p className="font-medium text-base mb-6">{content}</p>
      <div className="flex justify-between">
        <CustomInfoBox content={info} styleClass="rounded__btn" />
        <span className="font-semibold text-base">{date}</span>
      </div>
    </div>
  );
};
export default TasksCard;
