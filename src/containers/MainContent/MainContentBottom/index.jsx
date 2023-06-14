import CustomButton from "@/components/CustomButton";
import { CONTENT_BOTTOM } from "@constants";
import ContentBottomImg from "@assets/content-bottom.svg";

const MainContentBottom = () => {
  const { title, content, btn__text, btn__style } = CONTENT_BOTTOM;
  return (
    <div
      className="
                grid grid-cols-1 lg:grid-cols-2 
                gap-x-0 lg:gap-x-10 
                gap-y-8 lg:gap-y-0
                justify-items-center lg:justify-items-start
                mt-10 lg:mt-[219px] mb-12 lg:mb-[120px]
                "
    >
      <div className="mt-0 lg:mt-[59px] w-[85%] lg:w-full order-2 lg:order-1">
        <h1
          className="
                    font-dmSerif font-normal text-dark-charcoal 
                    text-3xl sm:text-4xl xl:text-5xl
                    leading-9 sm:leading-10 lg:leading-[50px] xl:leading-[64px]
                    "
        >
          {title}
        </h1>
        <p className="mt-6 mb-10 font-figtree font-normal text-lg leading-[26px]">
          {content}
        </p>
        <div className="flex justify-center lg:block">
          <CustomButton content={btn__text} styleClass={btn__style} />
        </div>
      </div>
      <div className="w-full order-1 lg:order-2 flex justify-center">
        <img
          className="h-[361px] mx-auto lg:mx-0"
          src={ContentBottomImg}
          alt="Bottom Image"
        />
      </div>
    </div>
  );
};
export default MainContentBottom;
