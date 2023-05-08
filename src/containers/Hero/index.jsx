import CustomButton from "@components/CustomButton";
import { HERO_INFO } from "@/constants";
import HeroImg from "@assets/hero.svg";

const Hero = () => {
  const { title, content, btn } = HERO_INFO;
  return (
    <div className="w-full flex justify-between mt-[191px]">
      <div className="w-[608px]">
        <h1 className="font-dmSerif font-normal text-[52px] text-dark-charcoal leading-[60px]">
          {title}
        </h1>
        <p className="pt-11 pb-10 font-figtree font-normal text-base">
          {content}
        </p>
        <CustomButton content={btn} styleClass={"hero__btn"} />
      </div>
      <img className="-mt-[20%] -mr-[4.15%]" src={HeroImg} alt="" />
    </div>
  );
};
export default Hero;
