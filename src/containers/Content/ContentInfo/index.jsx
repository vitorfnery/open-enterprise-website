import Info1 from "@containers/Content/ContentInfo/Info1";
import Info2 from "@containers/Content/ContentInfo/Info2";
import Info3 from "@containers/Content/ContentInfo/Info3";

const ContentInfo = () => {
  return (
    <div className="w-full mt-20 lg:mt-40 grid grid-cols-1 gap-y-20 lg:gap-y-40">
      <Info1 />
      <Info2 />
      <Info3 />
    </div>
  );
};
export default ContentInfo;
