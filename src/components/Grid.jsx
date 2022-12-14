import eggImageMobile from "../images/mobile/image-transform.jpg";
import cupImageMobile from "../images/mobile/image-stand-out.jpg";
import eggImageDesktop from "../images/desktop/image-transform.jpg";
import cupImageDesktop from "../images/desktop/image-stand-out.jpg";

const Grid = () => {
  return (
    <section>
      <div className="flex flex-col-reverse  md:flex-row ">
        <div className=" border border-red-500 text-center md:flex  md:w-[50%] md:flex-col md:justify-center  md:pl-36  md:text-left ">
          <p className="mx-auto mt-12 mb-8  max-w-[16rem]  break-words border font-fraunces text-3xl  md:mx-0 md:w-[50%]">
            Transform your brand
          </p>
          <p className="mx-auto mb-6 max-w-[18rem] border-2 border-red-800 font-barlow  md:mx-0 md:mb-8 md:w-[72%]">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>
          <p className="mb-10 font-fraunces md:font-black">LEARN MORE</p>
        </div>
        <div className="md:w-[50%]">
          <img className="sm:hidden" src={eggImageMobile} alt="" />
          <img className="hidden w-[100%] sm:block" src={eggImageDesktop} alt="" />
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-[50%]">
          <img className="sm:hidden" src={cupImageMobile} alt="" />
          <img className="hidden w-[100%] sm:block" src={cupImageDesktop} alt="" />
        </div>
        <div className=" text-center md:flex  md:w-[50%] md:flex-col md:justify-center  md:pl-36  md:text-left ">
          <p className=" mx-auto mt-12  mb-8 max-w-[16rem] border font-fraunces text-3xl md:mx-0 md:w-[50%]">
            Stand out to the right audience
          </p>
          <p className="mx-auto mb-6 max-w-[18rem] font-barlow md:mx-0 md:mb-8 md:w-[72%]">
            Using a collaborative formula of designers, researchers, photographers , videographers, and copywriters,
            we'll build and extend your brand in digital places.
          </p>
          <p className="mb-10 font-fraunces md:font-black">LEARN MORE</p>
        </div>
      </div>
      <div className="md:flex">
        <div className="flex h-[35rem] w-full flex-col  justify-end bg-apple-image-desktop bg-cover bg-top bg-no-repeat text-center  ">
          <p className="mb-8 font-fraunces text-2xl ">Graphic Design</p>
          <p className="mx-auto mb-8 max-w-[22rem] border font-barlow md:w-1/2">
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures
            potential clients' attention.
          </p>
        </div>
        <div className="flex h-[35rem] w-full flex-col justify-end bg-orange-image-desktop bg-cover bg-top bg-no-repeat text-center">
          <p className="mb-8 font-fraunces text-2xl ">Photography</p>
          <p className="mx-auto mb-8 max-w-[22rem] border font-barlow md:w-1/2">
            Increase your credibility by getting the most stunning, high-quality photos that improves your business
            image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Grid;
