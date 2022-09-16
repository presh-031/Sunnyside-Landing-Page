import eggImage from "../images/mobile/image-transform.jpg";
import cupImage from "../images/mobile/image-stand-out.jpg";
import appleImage from "../images/mobile/image-graphic-design.jpg";
import orangeImage from "../images/mobile/image-photography.jpg";

const Grid = () => {
  return (
    <section>
      <div>
        <div className="border-4 text-center border-red-900">
          <p className=" font-fraunces text-2xl  ">Transform your brand</p>
          <p>
            We are a full-service creative agency speciaalizing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>
          <p>LEARN MORE</p>
        </div>
        <div>
          <img src={eggImage} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={cupImage} alt="" />
        </div>
        <div>
          <p>Stand out to the right audience</p>
          <p>
            Using a collaborative formula of designers, researchers, photographers , videographers, and copywriters,
            we'll build and extend your brand in digital places.{" "}
          </p>
          <p>LEARN MORE</p>
        </div>
      </div>
      <div>
        <div style={{ backgroundImage: `url(${appleImage})` }}></div>
        <div style={{ backgroundImage: `url(${orangeImage})` }}></div>
      </div>
    </section>
  );
};

export default Grid;
