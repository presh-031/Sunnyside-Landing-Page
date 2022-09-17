import hamburgerMenu from "../images/icon-hamburger.svg";
import arrowDown from "../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div className="h-[35rem] w-full border border-red-800 bg-hero-image-mobile bg-cover bg-bottom bg-no-repeat sm:bg-center md:h-[50rem]  md:bg-hero-image-desktop">
      <header className=" flex items-center justify-between border px-4 py-6">
        <div>
          <p className=" font-barlow text-lg text-white md:text-2xl">sunnyside</p>
        </div>
        <nav>
          <ul className="mr-6 hidden items-center gap-12 border text-white md:flex">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li className="rounded-full bg-white py-2 px-6 text-black">Contact</li>
          </ul>
          <div className="md:hidden">
            <img src={hamburgerMenu} alt="menu" />
          </div>
        </nav>
      </header>
      <div className="mt-20 border text-center">
        <p className="break-words border border-red-900 font-fraunces  text-4xl tracking-widest text-white md:text-6xl ">
          WE ARE CREATIVES
        </p>
        <img className="mx-auto mt-16 border md:mt-28" src={arrowDown} alt="" />
      </div>
    </div>
  );
};

export default Hero;
