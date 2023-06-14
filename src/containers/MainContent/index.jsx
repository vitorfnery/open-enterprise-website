import MainContentHeader from "@containers/MainContent/MainContentHeader";
import MainContentCards from "@containers/MainContent/MainContentCards";
import MainContentInfo from "@containers/MainContent/MainContentInfo";
import MainContentTasks from "@containers/MainContent/MainContentTasks";
import MainContentBottom from "@containers/MainContent/MainContentBottom";

const MainContent = () => {
  return (
    <div className="w-full pr-4 md:pr-14">
      <MainContentHeader />
      <MainContentCards />
      <MainContentInfo />
      <MainContentTasks />
      <MainContentBottom />
    </div>
  );
};
export default MainContent;
