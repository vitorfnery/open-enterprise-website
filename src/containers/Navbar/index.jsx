import LogoNav from "@assets/logo-navbar.svg";
import { NAVBAR_TITLES } from "@/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = NAVBAR_TITLES;
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items center justify-between">
      <Link className="w-2/3 md:w-full" to="/">
        <img src={LogoNav} alt="logo" />
      </Link>
      <ul className="mt-[10px] mb-[9px] font-medium font-figtree hidden md:flex gap-10">
        {items.map(({ text, to, id }) => (
          <li className="" key={id}>
            <Link className="" to={to}>
              {text}
            </Link>
          </li>
        ))}
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

        {items.map(({ text, to, id }) => (
          <li className="p-4 border-b border-gray-600" key={id}>
            <Link className="" to={to}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      {/* <ul
          className={`
                    mt-10
                    md:mt-[10px] 
                    mb-[9px] 
                    font-medium font-figtree 
                    md:flex md:flex-row 
                    md:gap-10
                    z-[20] 
                    md:z-auto 
                    w-[50%]
                    md:w-auto
                    absolute
                    md:static
                    left-16
                    bg-gray-400
                    md:bg-inherit
                    transition-all 
                    duration-300 
                    ease-in
                    ${
                      open
                        ? "top-19 opacity-100"
                        : "top-[-490px] md:opacity-100 opacity-0"
                    }
                     `}
        >
          {items.map(({ text, to, id }) => (
            <li className="pt-2 pt-0" key={id}>
              <Link className="" to={to}>
                {text}
              </Link>
            </li>
          ))}
        </ul> */}
    </nav>
  );
};
export default Navbar;
