import { CONTENT_INFO_BLOCK_1, CONTENT_INFO_CARD_1 } from "@constants";
import { v4 } from "uuid";
import "./styles.css";
import CustomInfoParagraph from "@/components/CustomInfoParagraph";

const Members = () => {
  const { img, title, content } = CONTENT_INFO_BLOCK_1;
  const items = CONTENT_INFO_CARD_1;
  const team = items.members;
  const idGenerator = v4;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-[120px]">
      <CustomInfoParagraph img={img} title={title} content={content} />
      <div className="members__card font-robotoMono w-[85%] md:w-[70%] lg:w-[85%]  justify-self-center lg:justify-self-start">
        <h5 className="font-bold text-dark-charcoal text-2xl lg:text-[32px] mb-[5%]">
          {items.title}
        </h5>
        <ul className="grid grid-cols-1 gap-8">
          {team.map(({ img, member, shares }) => (
            <li
              className="grid grid-cols-3 md:grid-cols-5 gap-x-2"
              key={idGenerator()}
            >
              <img
                className="xl:w-[72px] xl:h-[72px] col-span-1 row-span-2 rounded-full justify-self-start lg:self-center"
                src={img}
              />
              <div className="col-span-2 md:col-span-3 justify-self-start md:mt-3 lg:mt-0">
                <h6 className="font-semibold text-dark-charcoal text-sm md:text-base lg:text-lg xl:text-2xl">
                  {member}
                </h6>
                <p className="font-medium text-granite-gray text-xs lg:text-base">
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
export default Members;
