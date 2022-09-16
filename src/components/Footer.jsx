import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-darkmoderatecyan">
      <p className="py-8 text-center font-barlow border text-2xl">sunnyside</p>
      <ul className="flex justify-around">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="border flex justify-center gap-y-2">
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
    </div>
  );
};

export default Footer;
