import { useLocation } from "react-router-dom";
import pageInfo from "utils/constants/pageInfo";

export default function usePageInfo(currentPageTitle?: string) {
  const location = useLocation();

  const page = Object.values(pageInfo).find(
    ({ url }) => url === location.pathname
  );

  return {
    pageTitle: page?.title,
    pageUrl: page?.url,
    isActive: page && page?.title === currentPageTitle,
  };
}
