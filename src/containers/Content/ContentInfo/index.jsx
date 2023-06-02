import Info1 from "./Info1";

const ContentInfo = () => {
  return (
    <div className="w-full mt-20 lg:mt-40 grid grid-cols-1 gap-y-20 lg:gap-y-40">
      <Info1 />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-[178px]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-10"></div>
    </div>
  );
};
export default ContentInfo;
