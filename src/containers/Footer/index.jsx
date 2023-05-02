import LogoFooter from "@assets/logo-footer.svg";
import { FOOTER_TITLES, FOOTER_CONTACT_BTN } from "@/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const items = FOOTER_TITLES;
  const requestText = FOOTER_CONTACT_BTN.text;
  return (
    <div className="flex items-start md:items-center justify-between">
      <Link className="pt-3 pb-[5px]" to="/">
        <img className="w-[154px]" src={LogoFooter} alt="logo" />
      </Link>
      <ul className="mt-[10px] mb-[9px] text-xs md:text-xl font-medium font-figtree flex flex-col md:flex-row gap-10">
        {items.map(({ text, url, id }) => (
          <li className="" key={id}>
            <a className="" href={url}>
              {text}
            </a>
          </li>
        ))}
        <li className="text-green-sheen">
          <Link>{requestText}</Link>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
