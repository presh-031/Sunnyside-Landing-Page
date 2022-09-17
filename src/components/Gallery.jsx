import coneMobile from "../images/mobile/image-gallery-cone.jpg";
import coneDesktop from "../images/desktop/image-gallery-cone.jpg";
import milkBottlesMobile from "../images/mobile/image-gallery-milkbottles.jpg";
import milkBottlesDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from "../images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../images/desktop/image-gallery-orange.jpg";
import sugarCubesMobile from "../images/mobile/image-gallery-sugar-cubes.jpg";
import sugarCubesDesktop from "../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <section className=" mt-24 grid grid-cols-2 md:grid-cols-4">
      <div>
        <img className="sm:hidden" src={milkBottlesMobile} alt="" />
        <img className="hidden w-[100%] sm:block" src={milkBottlesDesktop} alt="" />
      </div>
      <div>
        <img className="sm:hidden" src={orangeMobile} alt="" />
        <img className="hidden w-[100%] sm:block" src={orangeDesktop} alt="" />
      </div>
      <desktop>
        <img className="sm:hidden" src={coneMobile} alt="" />
        <img className="hidden w-[100%] sm:block" src={coneDesktop} alt="" />
      </desktop>
      <div>
        <img className="sm:hidden" src={sugarCubesMobile} alt="" />
        <img className="hidden w-[100%] sm:block" src={sugarCubesDesktop} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
