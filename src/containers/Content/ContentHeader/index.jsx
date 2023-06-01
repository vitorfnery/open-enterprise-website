import { CONTENT_HEADER } from "@/constants";

const ContentHeader = () => {
  const { title, content } = CONTENT_HEADER;
  return (
    <div className="flex flex-col mx-auto lg:ml-[18.958333333%] lg:mr-[18.888888889%] mt-40 font-normal text-dark-charcoal text-center">
      <h3 className="text-3xl lg:text-5xl leading-[64px] font-dmSerif mb-6">
        {title}
      </h3>
      <p
        className=" 
                    text-base lg:text-lg 
                    font-figtree leading-[26px] tracking-[-0.02em] mb-12
                  "
      >
        {content}
      </p>
    </div>
  );
};
export default ContentHeader;
