import { CONTENT_HEADER } from "@/constants";

const ContentHeader = () => {
  const { title, content } = CONTENT_HEADER;
  return (
    <div className="flex flex-col ml-[18.958333333%] mr-[18.888888889%] mt-40 font-normal text-dark-charcoal text-center">
      <h3 className="text-5xl leading-[64px] font-dmSerif mb-6">{title}</h3>
      <p className="text-lg text leading-[26px] tracking-[-0.02em] mb-12">
        {content}
      </p>
    </div>
  );
};
export default ContentHeader;
