import Members from "@containers/MainContent/MainContentInfo/Members";
import Investor from "@containers/MainContent/MainContentInfo/Investor";
import Applicants from "@containers/MainContent/MainContentInfo/Applicants";

const MainContentInfo = () => {
  return (
    <div className="w-full mt-20 lg:mt-40 grid grid-cols-1 gap-y-20 lg:gap-y-40">
      <Members />
      <Investor />
      <Applicants />
    </div>
  );
};
export default MainContentInfo;
