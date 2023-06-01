import { CONTENT_INFO_BLOCK_1 } from "@constants/content-info";
import { CONTENT_INFO_CARD_1 } from "@constants/content-info";
import { v4 } from "uuid";
import "./styles.css";

const Info1 = () => {
  const block = CONTENT_INFO_BLOCK_1;
  const items = CONTENT_INFO_CARD_1;
  const team = items.members;
  const idGenerator = v4;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-[120px]">
      <div className="flex flex-cols">
        <img src={block.img} />
        <h4>{block.title}</h4>
        <p>{block.content}</p>
      </div>
      <div className="members__card font-robotoMono">
        <h5 className="font-bold text-[32px] mb-[5%]">{items.title}</h5>
        <ul className="m grid grid-cols-1 gap-3">
          {team.map(({ img, member, shares }) => (
            <li
              className="grid grid-cols-3 md:grid-cols-4 justify-items-center"
              key={idGenerator()}
            >
              <img className="w-1/2 row-span-2 rounded-full" src={img} />
              <div className="">
                <h6 className="font-semibold text-2xl">{member}</h6>
                <p className="font-medium text-base">{shares}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Info1;
