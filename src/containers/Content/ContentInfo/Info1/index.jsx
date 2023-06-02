import { CONTENT_INFO_BLOCK_1 } from "@constants/content-info";
import { CONTENT_INFO_CARD_1 } from "@constants/content-info";
import { v4 } from "uuid";
import "./styles.css";

const Info1 = () => {
  const { img, title, content } = CONTENT_INFO_BLOCK_1;
  const items = CONTENT_INFO_CARD_1;
  const team = items.members;
  const idGenerator = v4;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-[120px]">
      <div className="grid grid-cols-1 gap-y-6">
        <img src={img} />
        <h4 className="font-dmSerif font-normal text-5xl leading-[64px] text-dark-charcoal">
          {title}
        </h4>
        <p className="font-figtree font-normal text-lg leading-[26px] text-dark-charcoal">
          {content}
        </p>
      </div>
      <div className="members__card font-robotoMono">
        <h5 className="font-bold text-dark-charcoal text-[32px] mb-[5%]">
          {items.title}
        </h5>
        <ul className="grid grid-cols-1 gap-8">
          {team.map(({ img, member, shares }) => (
            <li
              className="grid grid-cols-3 md:grid-cols-5 "
              key={idGenerator()}
            >
              <img
                className="w-[72px] h-[72px] row-span-2 rounded-full justify-self-start"
                src={img}
              />
              <div className="col-span-3 justify-self-start">
                <h6 className="font-semibold text-dark-charcoal text-2xl">
                  {member}
                </h6>
                <p className="font-medium text-granite-gray text-base">
                  {shares}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Info1;
