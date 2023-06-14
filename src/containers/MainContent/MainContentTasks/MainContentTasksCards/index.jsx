import CustomButton from "@/components/CustomButton";
import TasksCard from "@/components/TasksCard";
import { TASKS, TASKS_PER_ROW, MORE_LESS_BTN } from "@constants";
import { v4 } from "uuid";
import { useState } from "react";

const MainContentTasksCards = () => {
  const cardsPerRow = TASKS_PER_ROW;
  const items = TASKS;
  const viewMoreText = MORE_LESS_BTN.more;
  const showLessText = MORE_LESS_BTN.less;
  const idGenerator = v4;
  const [visible, setVisible] = useState(cardsPerRow);
  const handleViewMore = () => {
    setVisible(visible + cardsPerRow);
  };
  const handleShowLess = () => {
    setVisible(cardsPerRow);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6">
        {items?.slice(0, visible)?.map(({ title, content, info, date }) => {
          return (
            <div className="px-2.5 md:px-0" key={idGenerator()}>
              <TasksCard
                title={title}
                content={content}
                info={info}
                date={date}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <CustomButton
          content={visible < items?.length ? viewMoreText : showLessText}
          styleClass="more__less__btn"
          onClick={visible < items?.length ? handleViewMore : handleShowLess}
        />
      </div>
    </div>
  );
};
export default MainContentTasksCards;
