import eggImage from "../images/mobile/image-transform.jpg";
import cupImage from "../images/mobile/image-stand-out.jpg";
import appleImage from "../images/mobile/image-graphic-design.jpg";
import orangeImage from "../images/mobile/image-photography.jpg";

const Grid = () => {
  return (
    <section>
      <div className="flex flex-col-reverse  sm:flex-row ">
        <div className=" border border-red-500 text-center sm:flex  sm:w-[50%] sm:flex-col sm:justify-center  sm:pl-36  sm:text-left ">
          <p className=" mx-auto mt-12 mb-8  w-3/4 border font-fraunces text-3xl sm:mx-0 sm:w-[50%]">
            Transform your brand
          </p>
          <p className="mx-auto mb-6 w-4/5 font-barlow sm:mx-0 sm:mb-8 sm:w-[72%]">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>
          <p className="mb-10 font-fraunces sm:font-black">LEARN MORE</p>
        </div>
        <div className="sm:w-[50%]">
          <img src={eggImage} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={cupImage} alt="" />
        </div>
        <div className=" text-center ">
          <p className=" mx-auto mt-12  mb-8 w-3/4 border font-fraunces text-3xl">Stand out to the right audience</p>
          <p className="mx-auto mb-6 w-4/5 font-barlow">
            Using a collaborative formula of designers, researchers, photographers , videographers, and copywriters,
            we'll build and extend your brand in digital places.{" "}
          </p>
          <p className="mb-10 font-fraunces">LEARN MORE</p>
        </div>
      </div>
      <div>
        <div
          className="flex h-[35rem]  w-full flex-col justify-end bg-cover bg-no-repeat text-center"
          style={{ backgroundImage: `url(${appleImage})` }}
        >
          <p className="mb-8 font-fraunces text-2xl">Graphic Design</p>
          <p className="mx-auto mb-8 w-[92%] border font-barlow">
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures
            potential clients' attention.
          </p>
        </div>
        <div
          className="flex h-[35rem]  w-full flex-col justify-end bg-cover bg-no-repeat text-center"
          style={{ backgroundImage: `url(${orangeImage})` }}
        >
          <p className="mb-8 font-fraunces text-2xl">Photography</p>
          <p className="mx-auto mb-8 w-[92%] border font-barlow">
            Increase your credibility by getting the most stunning, high-quality photos that improves your business
            image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Grid;
