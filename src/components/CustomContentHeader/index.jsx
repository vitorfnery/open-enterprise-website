const CustomContentHeader = ({ title, content }) => {
  return (
    <div
      className="
                  flex flex-col mx-auto lg:ml-[18.958333333%] lg:mr-[18.888888889%] 
                  mt-14 sm:mt-20 md:mt-30 lg:mt-40 
                  font-normal text-dark-charcoal text-center
                "
    >
      <h3 className="text-3xl lg:text-5xl leading-10  sm:leading-[64px] font-dmSerif mb-6">
        {title}
      </h3>
      <p
        className=" 
                  text-base lg:text-lg 
                  font-figtree leading-[26px] tracking-[-0.02em] mb-12
                "
      >
        {content}
      </p>
    </div>
  );
};
export default CustomContentHeader;
