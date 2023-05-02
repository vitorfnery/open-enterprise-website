import CustomTextImg from "@/components/CustomTextImg";
import { HERO_INFO } from "@/constants";
import HeroImg from "@assets/hero.svg";

const Hero = () => {
  const { title, content, btn } = HERO_INFO;
  return (
    <div className="">
      <CustomTextImg title={title} content={content} btn={btn} src={HeroImg} />
    </div>
  );
};
export default Hero;
