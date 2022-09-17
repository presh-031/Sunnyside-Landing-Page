import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-darkmoderatecyan">
      <p className="py-8 text-center font-barlow  text-2xl md:text-3xl">sunnyside</p>
      <ul className="flex justify-around md:justify-center md:gap-8">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="mt-20 flex   justify-center gap-6 pb-16">
        <div>
          <img src={facebook} alt="" />
        </div>
        <div>
          <img src={instagram} alt="" />
        </div>
        <div>
          <img src={twitter} alt="" />
        </div>
        <div>
          <img src={pinterest} alt="" />
        </div>
      </div>
      {/* Attribution */}
    </div>
  );
};

export default Footer;
