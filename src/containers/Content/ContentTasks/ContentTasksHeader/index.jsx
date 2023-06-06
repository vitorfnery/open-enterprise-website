import CustomContentHeader from "@/components/CustomContentHeader";
import { CONTENT_TASKS_HEADER } from "@/constants";

const ContentTasksHeader = () => {
  const { title, content } = CONTENT_TASKS_HEADER;
  return <CustomContentHeader title={title} content={content} />;
};
export default ContentTasksHeader;
