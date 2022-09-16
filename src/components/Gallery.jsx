import cone from "../images/mobile/image-gallery-cone.jpg";
import milkBottles from "../images/mobile/image-gallery-milkbottles.jpg";
import orange from "../images/mobile/image-gallery-orange.jpg";
import sugarCubes from "../images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <section className=" grid grid-cols-2 mt-24">
      <div>
        <img src={milkBottles} alt="" />
      </div>
      <div>
        <img src={orange} alt="" />
      </div>
      <div>
        <img src={cone} alt="" />
      </div>
      <div>
        <img src={sugarCubes} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
