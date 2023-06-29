import { CONTENT_CARDS } from "@/constants";
import ValuesCard from "@/components/ValuesCard";
import { v4 } from "uuid";

const MainContentCards = () => {
  const items = CONTENT_CARDS;
  const idGenerator = v4;
  return (
    <div className="w-full">
      <ul className="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-[23px]">
        {items.map(({ img, title, content }) => (
          <li key={idGenerator()}>
            <ValuesCard img={img} title={title} content={content} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MainContentCards;
