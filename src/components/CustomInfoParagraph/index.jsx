const CustomInfoParagraph = ({ img, title, content }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-y-3 lg:gap-y-6">
      <img className="scale-50 lg:scale-100 row-span-1 self-end" src={img} />
      <div className="row-span-2">
        <h4
          className="
                    font-dmSerif font-normal text-3xl lg:text-5xl lg:leading-[64px] 
                    mb-5 md:mb-3 lg:mb-0 text-dark-charcoal 
                    "
        >
          {title}
        </h4>
        <p className="font-figtree font-normal text-sm lg:text-lg leading-[26px] text-dark-charcoal">
          {content}
        </p>
      </div>
    </div>
  );
};
export default CustomInfoParagraph;
