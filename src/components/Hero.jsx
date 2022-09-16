import hamburgerMenu from "../images/icon-hamburger.svg";
import arrowDown from "../images/icon-arrow-down.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero h-[35rem] w-full border border-red-800 bg-cover bg-no-repeat  sm:h-[50rem]">
      <header className=" flex items-center justify-between border px-4 py-6">
        <div>
          <p className=" font-barlow text-lg text-white sm:text-2xl">sunnyside</p>
        </div>
        <nav>
          <ul className="mr-6 hidden items-center gap-12 border text-white sm:flex">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li className="rounded-full bg-white py-2 px-6 text-black">Contact</li>
          </ul>
          <div className="sm:hidden">
            <img src={hamburgerMenu} alt="menu" />
          </div>
        </nav>
      </header>
      <div className="mt-20 border text-center">
        <p className=" border border-red-900 font-fraunces  text-4xl tracking-widest text-white sm:text-6xl ">
          WE ARE CREATIVES
        </p>
        <img className="mx-auto mt-16 border sm:mt-28" src={arrowDown} alt="" />
      </div>
    </div>
  );
};

export default Hero;
