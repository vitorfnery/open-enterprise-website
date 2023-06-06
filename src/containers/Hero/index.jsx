import CustomButton from "@components/CustomButton";
import { HERO_INFO } from "@/constants";
import HeroImg from "@assets/hero.svg";

const Hero = () => {
  const { title, content, btn } = HERO_INFO;
  return (
    <div
      className="
                  w-full grid grid-cols-1 lg:grid-cols-2 
                  justify-items-center lg:justify-items-start
                  mt-[3%] lg:mt-[8%] 
                  gap-y-20
                  lg:gap-x-10
                "
    >
      <div className="w-4/5 lg:w-full">
        <h1 className="font-dmSerif font-normal text-3xl sm:text-5xl lg:text-[52px] text-dark-charcoal leading-[50px] lg:leading-[60px]">
          {title}
        </h1>
        <p className="pt-11 pb-10 font-figtree font-normal text-base">
          {content}
        </p>
        <div className="flex justify-center md:block">
          <CustomButton content={btn} styleClass={"hero__btn"} />
        </div>
      </div>
      <img className="-mt-[20%] mx-auto z-0" src={HeroImg} alt="Hero Image" />
    </div>
  );
};
export default Hero;
