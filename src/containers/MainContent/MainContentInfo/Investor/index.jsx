import { CONTENT_INFO_BLOCK_2, CONTENT_INFO_CARD_2 } from "@constants";
import "./styles.css";
import CustomButton from "@/components/CustomButton";
import CustomInfoParagraph from "@/components/CustomInfoParagraph";

const Investor = () => {
  const { img, title, content } = CONTENT_INFO_BLOCK_2;
  const {
    investorImg,
    investorTitle,
    subtitle,
    investorContent,
    commit,
    commitValue,
    shares,
    numShares,
    voteBtn,
    voteBtnStyle,
  } = CONTENT_INFO_CARD_2;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-16 xl:gap-x-[178px]">
      <div className="investor__card font-robotoMono grid justify-self-center md:flex md:flex-col gap-4 md:gap-8 lg:gap-24 xl:gap-12 2xl:gap-8 w-[85%] order-2 lg:order-1">
        <div className="h-[260px] grid grid-cols-1 gap-y-0 md:gap-y-6">
          <div className="grid grid-cols-4 gap-x-2 md:gap-x-0">
            <img src={investorImg} alt={investorTitle} />
            <div className="row-span- md:row-span-2 col-span-3 flex flex-col md:gap-2">
              <h5 className="self-start font-bold text-dark-charcoal text-base md:text-xl lg:text-2xl leading-8">
                {investorTitle}
              </h5>
              <p className="font-semibold text-granite-gray text-xs md:text-base leading-2">
                {subtitle}
              </p>
            </div>
          </div>
          <p className="font-medium text-xs md:text-base text-dark-charcoal md:leading-6">
            {investorContent}
          </p>
          <div className="grid grid-cols-2 font-medium gap-x-4 md:gap-x-[74px]">
            <div className="flex flex-col md:gap-3">
              <p className="text-xs md:text-base md:leading-6 text-granite-gray">
                {commit}
              </p>
              <span className="text-dark-charcoal text-xs md:text-lg lg:text-2xl">
                {commitValue}
              </span>
            </div>
            <div className="flex flex-col md:gap-3">
              <p className="text-xs md:text-base md:leading-6 text-granite-gray">
                {shares}
              </p>
              <span className="text-dark-charcoal text-xs md:text-lg lg:text-2xl">
                {numShares}
              </span>
            </div>
          </div>
        </div>
        <CustomButton content={voteBtn} styleClass={voteBtnStyle} />
      </div>
      <div className="order-1 lg:order-2">
        <CustomInfoParagraph img={img} title={title} content={content} />
      </div>
    </div>
  );
};
export default Investor;
