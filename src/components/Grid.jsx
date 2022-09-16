import eggImage from "../images/mobile/image-transform.jpg";
import cupImage from "../images/mobile/image-stand-out.jpg";
import appleImage from "../images/mobile/image-graphic-design.jpg";
import orangeImage from "../images/mobile/image-photography.jpg";

const Grid = () => {
  return (
    <section>
      <div className="flex flex-col-reverse">
        <div className="text-center">
          <p className=" font-fraunces text-3xl  mt-12 mb-8 w-3/4 border mx-auto">Transform your brand</p>
          <p className="font-barlow w-4/5 mx-auto mb-6">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>
          <p className="mb-10 font-fraunces">LEARN MORE</p>
        </div>
        <div>
          <img src={eggImage} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={cupImage} alt="" />
        </div>
        <div className=" text-center ">
          <p className=" font-fraunces text-3xl  mt-12 mb-8 w-3/4 border mx-auto">Stand out to the right audience</p>
          <p className="font-barlow w-4/5 mx-auto mb-6">
            Using a collaborative formula of designers, researchers, photographers , videographers, and copywriters,
            we'll build and extend your brand in digital places.{" "}
          </p>
          <p className="mb-10 font-fraunces">LEARN MORE</p>
        </div>
      </div>
      <div>
        <div
          className="bg-no-repeat bg-cover  w-full h-[35rem] flex flex-col justify-end text-center"
          style={{ backgroundImage: `url(${appleImage})` }}
        >
          <p className="font-fraunces text-2xl mb-8">Graphic Design</p>
          <p className="mb-8 font-barlow w-[92%] mx-auto border">
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures
            potential clients' attention.
          </p>
        </div>
        <div
          className="bg-no-repeat bg-cover  w-full h-[35rem] flex flex-col justify-end text-center"
          style={{ backgroundImage: `url(${orangeImage})` }}
        >
          <p className="font-fraunces text-2xl mb-8">Photography</p>
          <p className="mb-8 font-barlow w-[92%] mx-auto border">
            Increase your credibility by getting the most stunning, high-quality photos that improves your business
            image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Grid;
