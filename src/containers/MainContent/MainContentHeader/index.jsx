import CustomContentHeader from "@/components/CustomContentHeader";
import { CONTENT_HEADER } from "@/constants";

const MainContentHeader = () => {
  const { title, content } = CONTENT_HEADER;
  return <CustomContentHeader title={title} content={content} />;
};
export default MainContentHeader;
