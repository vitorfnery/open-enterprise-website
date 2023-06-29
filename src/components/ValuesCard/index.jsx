import "./styles.css";

const ValuesCard = ({ img, title, content }) => {
  return (
    <div className="Values__card flex flex-col justify-center items-center py-16 h-full">
      <img className="mb-6 w-[104px] h-[88px]" src={img} />
      <h6
        className="  
                    font-figtree font-bold text-base leading-8 text-dark-charcoal
                    mb-4 mx-auto
                  "
      >
        {title}
      </h6>
      <p
        className="
                    font-figtree font-normal text-lg leading-[26px] text-dark-charcoal
                    mx-[5%] text-center
                  "
      >
        {content}
      </p>
    </div>
  );
};
export default ValuesCard;
