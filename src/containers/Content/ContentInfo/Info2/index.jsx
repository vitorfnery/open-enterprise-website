import { CONTENT_INFO_BLOCK_2 } from "@constants/content-info";
import { CONTENT_INFO_CARD_2 } from "@constants/content-info";
import "./styles.css";
import CustomButton from "@/components/CustomButton";

const Info2 = () => {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-[178px]">
      <div className="investor__card font-robotoMono flex flex-col gap-8 w-[85%]">
        <div className="h-[260px] grid grid-cols-1 gap-y-6">
          <div className="grid grid-cols-4">
            <img src={investorImg} alt={investorTitle} />
            <div className="row-span-2 col-span-3 flex flex-col gap-2">
              <h5 className="font-bold text-dark-charcoal text-2xl leading-8">
                {investorTitle}
              </h5>
              <p className="font-semibold text-granite-gray text-base leading-6">
                {subtitle}
              </p>
            </div>
          </div>
          <p className="font-medium text-base text-dark-charcoal leading-6">
            {investorContent}
          </p>
          <div className="grid grid-cols-2 font-medium gap-x-[74px]">
            <div className="flex flex-col gap-3">
              <p className="text-base leading-6 text-granite-gray">{commit}</p>
              <span className="text-dark-charcoal text-2xl">{commitValue}</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base leading-6 text-granite-gray">{shares}</p>
              <span className="text-dark-charcoal text-2xl">{numShares}</span>
            </div>
          </div>
        </div>
        <CustomButton content={voteBtn} styleClass={voteBtnStyle} />
      </div>
      <div className="grid grid-cols-1 gap-y-6">
        <img src={img} />
        <h4 className="font-dmSerif font-normal text-5xl leading-[64px] text-dark-charcoal">
          {title}
        </h4>
        <p className="font-figtree font-normal text-lg leading-[26px] text-dark-charcoal">
          {content}
        </p>
      </div>
    </div>
  );
};
export default Info2;
