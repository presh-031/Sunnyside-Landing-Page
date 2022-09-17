import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <section className="text-center">
      <p className="mt-12 font-fraunces  md:mt-24">CLIENT TESTIMONIALS</p>
      {/* flex */}
      <div className=" border md:mx-auto md:flex md:w-3/4">
        <div className="mt-12 border">
          <img className="mx-auto w-12 rounded-full md:w-16" src={emily} alt="" />
          <p className="mx-auto mt-6 mb-8 w-[80%] md:w-[90%]">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
            hit.
          </p>
          <p className="mb-2 font-fraunces">Emily R.</p>
          <p>Marketing Director</p>
        </div>
        <div className="mt-12 border">
          <img className="mx-auto w-12 rounded-full md:w-16" src={thomas} alt="" />
          <p className="mx-auto mt-6 mb-8 w-[80%] md:w-[80%]">
            Sunnyside's enthusiamd coupled with their keen interest in our brand's success made it a satisfying and
            enjoyable experience.
          </p>
          <p className="mb-2 font-fraunces">Thomas S.</p>
          <p>Chief Operating Officer</p>
        </div>
        <div className="mt-12 border">
          <img className="mx-auto w-12 rounded-full md:w-16" src={jennie} alt="" />
          <p className="mx-auto mt-6 mb-8 w-[80%] md:w-[95%]">
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
          </p>
          <p className="mb-2 font-fraunces">Jennie F.</p>
          <p>Business Owner</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
