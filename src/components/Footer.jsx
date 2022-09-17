import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-darkmoderatecyan">
      <p className="py-8 text-center font-barlow  text-2xl sm:text-3xl">sunnyside</p>
      <ul className="flex justify-around sm:justify-center  sm:gap-8 very-tiny:flex-col very-tiny:items-center very-tiny:gap-y-2 small:flex-row">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="mt-20 flex   justify-center gap-6 pb-16 very-tiny:flex-col very-tiny:items-center">
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
