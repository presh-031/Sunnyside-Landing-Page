import heroImg from "../images/mobile/image-header.jpg";
import hamburgerMenu from "../images/icon-hamburger.svg";
import arrowDown from "../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div
      className="border border-red-800 h-[30rem] bg-no-repeat bg-cover  w-full"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <header className=" border flex justify-between items-center px-4 py-6">
        <div>
          <p className=" text-white font-barlow text-lg">sunnyside</p>
        </div>
        <nav>
          <ul className="hidden">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div>
            <img src={hamburgerMenu} alt="menu" />
          </div>
        </nav>
      </header>
      <div className="border mt-14 text-center">
        <p className=" tracking-widest font-fraunces text-white  text-4xl border border-red-900 ">WE ARE CREATIVES</p>
        <img className="border mx-auto mt-16" src={arrowDown} alt="" />
      </div>
    </div>
  );
};

export default Hero;
