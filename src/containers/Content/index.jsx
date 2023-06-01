import ContentHeader from "@containers/Content/ContentHeader";
import ContentCards from "@containers/Content/ContentCards";
import ContentInfo from "@containers/Content/ContentInfo";
import ContentTasks from "@containers/Content/ContentTasks";
import ContentBottom from "@containers/Content/ContentBottom";

const Content = () => {
  return (
    <div className="w-full pr-4 md:pr-14">
      <ContentHeader />
      <ContentCards />
      <ContentInfo />
      <ContentTasks />
      <ContentBottom />
    </div>
  );
};
export default Content;
