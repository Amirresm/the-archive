import Header from "components/header/Header";
import { defaultLinks } from "utils/constants/pageLinks";

export default function DefaultHeader() {
  return <Header links={defaultLinks} />;
}
