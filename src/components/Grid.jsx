import eggImage from "../images/mobile/image-transform.jpg";
import cupImage from "../images/mobile/image-stand-out.jpg";

const Grid = () => {
  return (
    <section>
      <div className="flex flex-col-reverse  md:flex-row ">
        <div className=" border border-red-500 text-center md:flex  md:w-[50%] md:flex-col md:justify-center  md:pl-36  md:text-left ">
          <p className=" mx-auto mt-12 mb-8  w-3/4 border font-fraunces text-3xl md:mx-0 md:w-[50%]">
            Transform your brand
          </p>
          <p className="mx-auto mb-6 w-4/5 font-barlow md:mx-0 md:mb-8 md:w-[72%]">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>
          <p className="mb-10 font-fraunces md:font-black">LEARN MORE</p>
        </div>
        <div className="md:w-[50%]">
          <img src={eggImage} alt="" />
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-[50%]">
          <img src={cupImage} alt="" />
        </div>
        <div className=" text-center md:flex  md:w-[50%] md:flex-col md:justify-center  md:pl-36  md:text-left ">
          <p className=" mx-auto mt-12  mb-8 w-3/4 border font-fraunces text-3xl md:mx-0 md:w-[50%]">
            Stand out to the right audience
          </p>
          <p className="mx-auto mb-6 w-4/5 font-barlow md:mx-0 md:mb-8 md:w-[72%]">
            Using a collaborative formula of designers, researchers, photographers , videographers, and copywriters,
            we'll build and extend your brand in digital places.
          </p>
          <p className="mb-10 font-fraunces md:font-black">LEARN MORE</p>
        </div>
      </div>
      <div className="md:flex">
        <div className="flex h-[35rem]  w-full flex-col justify-end bg-cover bg-no-repeat text-center">
          <p className="mb-8 font-fraunces text-2xl ">Graphic Design</p>
          <p className="mx-auto mb-8 w-[92%] border font-barlow md:w-1/2">
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures
            potential clients' attention.
          </p>
        </div>
        <div className="flex h-[35rem]  w-full flex-col justify-end bg-cover bg-no-repeat text-center">
          <p className="mb-8 font-fraunces text-2xl ">Photography</p>
          <p className="mx-auto mb-8 w-[92%] border font-barlow md:w-1/2">
            Increase your credibility by getting the most stunning, high-quality photos that improves your business
            image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Grid;
