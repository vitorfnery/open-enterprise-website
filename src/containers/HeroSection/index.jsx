import CustomButton from "@components/CustomButton";
import { HERO_INFO } from "@/constants";
import HeroImg from "@assets/hero.svg";

const HeroSection = () => {
  const { title, content, btn__text, btn__style } = HERO_INFO;
  return (
    <div
      className="
                  w-full grid grid-cols-1 lg:grid-cols-2 
                  justify-items-center lg:justify-items-start
                  mt-[15%] sm:mt-[8%] 
                  gap-y-0 lg:gap-y-20
                  lg:gap-x-10
                "
    >
      <div className="w-4/5 lg:w-full">
        <h1
          className="
                    font-dmSerif font-normal text-dark-charcoal 
                    text-3xl sm:text-5xl xl:text-[52px]  
                    leading-9 sm:leading-[50px] lg:leading-[60px]
                    "
        >
          {title}
        </h1>
        <p className="pt-5 pb-6 md:pt-11 md:pb-10 font-figtree font-normal text-base md:text-2xl">
          {content}
        </p>
        <div className="flex justify-center md:block">
          <CustomButton content={btn__text} styleClass={btn__style} />
        </div>
      </div>
      <div className="w-full justify-self-start 2xl:justify-self-center">
        <img
          className="lg:-mt-[20%] mx-auto z-0 scale-[0.85] lg:scale-100"
          src={HeroImg}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};
export default HeroSection;
