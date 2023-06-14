import { CONTENT_INFO_BLOCK_3 } from "@constants";
import ApplicantsCards from "@containers/MainContent/MainContentInfo/Applicants/ApplicantsCards";
import CustomInfoParagraph from "@/components/CustomInfoParagraph";

const Applicants = () => {
  const { img, title, content } = CONTENT_INFO_BLOCK_3;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-10">
      <CustomInfoParagraph img={img} title={title} content={content} />
      <ApplicantsCards />
    </div>
  );
};
export default Applicants;
