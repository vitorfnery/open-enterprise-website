import LogoNav from "@assets/logo-navbar.svg";
import { NAVBAR_TITLES, NAV_REQUEST_BTN } from "@/constants";
import { useState } from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = NAVBAR_TITLES;
  const requestText = NAV_REQUEST_BTN.text;
  const idGenerator = v4;
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between mr-4 md:mr-14 w-[88%] lg:w-[90%] 2xl:w-[92%] absolute z-20">
      <Link to="/">
        <img
          className="w-[189px] md:w-[220px] lg:w-[281px] "
          src={LogoNav}
          alt="logo"
        />
      </Link>
      <ul
        className="
                  mt-[10px] mb-[9px] text-xs lg:text-base xl:text-xl font-medium font-figtree hidden 
                  gap-3 md:flex md:gap-10 xl:gap-16 2xl:gap-20
                  "
      >
        {items.map(({ text, to }) => (
          <li key={idGenerator()}>
            <Link className="cursor-pointer" to={to}>
              {text}
            </Link>
          </li>
        ))}
        <li className="text-green-sheen">
          <Link>{requestText}</Link>
        </li>
      </ul>
      <div
        className="cursor-pointer block md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
      <ul
        className={
          open
            ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-gray-100 text-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <Link to="/">
          <img src={LogoNav} alt="logo" />
        </Link>

        {items.map(({ text, to }) => (
          <li className="p-4 border-b border-gray-600" key={idGenerator()}>
            <Link className="" to={to}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
