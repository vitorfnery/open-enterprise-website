import CustomButton from "@components/CustomButton";

const CustomTextImg = ({ title, content, btn, src }) => {
  return (
    <div className="w-full flex justify-between mt-[191px]">
      <div className="w-[608px]">
        <h1 className="font-cousine font-normal text-[52px] text-dark-charcoal leading-[60px]">
          {title}
        </h1>
        <p className="pt-11 font-figtree font-normal text-base">{content}</p>
        <CustomButton content={btn} styleClass={"hero__btn"} />
      </div>
      <img className="absolute right-0 top-[0.0075%]" src={src} alt="" />
    </div>
  );
};
export default CustomTextImg;
