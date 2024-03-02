import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

interface NavLinkProps {
  label: string;
  link: string;
}

const navLinks: NavLinkProps[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Skills",
    link: "/skills",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Blogs",
    link: "/blogs",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Header: React.FC = () => {
  const [click, setClick] = useState(false);

  return (
    <main className="fixed right-0 top-0 z-[9999] w-full border-b border-[#252425] bg-[#101010] px-4     text-white  xl:px-0">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between  py-4  ">
        <div>
          <Link to="/">
            <h1 className="font-mono text-3xl font-semibold  ">
              Farhan-Masuk
              <span className="animate-ping text-[#4BFFA5] ">.</span>
            </h1>
          </Link>
        </div>
        <div className=" hidden md:block">
          <div className="flex gap-7">
            {navLinks.map((data, idx) => (
              <div key={idx}>
                <li className="list-none">
                  <NavLink className="text-[18px] font-normal" to={data.link}>
                    {data.label}
                  </NavLink>
                </li>
              </div>
            ))}
          </div>
        </div>

        {/* sidebar mobile menu */}
        <div
          className={`fixed z-[9999] h-full w-screen  ${
            click ? "" : "hidden "
          } right-0 top-0 bg-black/50 backdrop-blur-sm  `}
        >
          <div className="hero-mobile-menu-bg absolute left-0 top-0 flex h-screen w-56 flex-col items-center gap-5 p-8 text-white">
            <IoCloseOutline
              size={35}
              onClick={() => setClick(false)}
              className="-ml-40 -mt-4  mb-5 cursor-pointer  "
            />
            {navLinks.map((data, i) => (
              <NavLink
                onClick={() => setClick(false)}
                key={i}
                className="w-full border-b border-dashed font-bold"
                to={data.link}
              >
                {data.label}
              </NavLink>
            ))}
            <div className="flex w-full items-center gap-3 border-b border-dashed">
              <Link
                onClick={() => setClick(false)}
                to="https://www.linkedin.com/in/farhan-masuk/"
                target="_blank"
              >
                <FaLinkedinIn className="cursor-pointer   text-2xl" />
              </Link>

              <Link
                onClick={() => setClick(false)}
                to="https://github.com/farhan8728"
                target="_blank"
              >
                <FaGithub className="cursor-pointer   text-[22px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center gap-3   ">
            <Link
              to="https://www.linkedin.com/in/farhan-masuk/"
              target="_blank"
            >
              <FaLinkedinIn className="cursor-pointer text-2xl hover:text-[#4BFFA5]" />
            </Link>
            <Link to="https://github.com/farhan8728" target="_blank">
              <FaGithub className="cursor-pointer text-[22px] hover:text-[#4BFFA5]" />
            </Link>
          </div>
        </div>
        <div
          onClick={() => setClick(true)}
          className="block cursor-pointer md:hidden"
        >
          <FiMenu size={30} />
        </div>
      </nav>
    </main>
  );
};

export default Header;
