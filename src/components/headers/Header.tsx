import { Link, useLocation } from "react-router-dom";
import { pageInfo } from "../../utils/constants/pageInfo";

type HeaderProps = {
  titleOverride?: string;
  links?: { title: string; url: string }[];
};
export default function Header({ titleOverride, links }: HeaderProps) {
  const location = useLocation();
  const pageTitle = Object.values(pageInfo).find(
    ({ url }) => url === location.pathname
  )?.title;

  return (
    <header className="flex h-12 items-center bg-stone-600 p-2 text-gray-50 shadow-lg">
      {titleOverride || pageTitle}
      {links && <span className="basis-full" />}
      {(links || []).map((link) => (
        <Link className="px-2" to={link.url}>
          {link.title}
        </Link>
      ))}
    </header>
  );
}
