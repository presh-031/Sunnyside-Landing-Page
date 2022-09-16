import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <section className="text-center">
      <p className="mt-12 font-fraunces">CLIENT TESTIMONIALS</p>
      {/* flex */}
      <div className=" border">
        <div className="mt-12 border">
          <img className="w-12 rounded-full mx-auto" src={emily} alt="" />
          <p className="w-[80%] mx-auto mt-6 mb-8">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
            hit.
          </p>
          <p className="font-fraunces mb-2">Emily R.</p>
          <p>Marketing Director</p>
        </div>
        <div className="mt-12 border">
          <img className="w-12 rounded-full mx-auto" src={thomas} alt="" />
          <p className="w-[80%] mx-auto mt-6 mb-8">
            Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and
            enjoyable experience.
          </p>
          <p className="font-fraunces mb-2">Thomas S.</p>
          <p>Chief Operating Officer</p>
        </div>
        <div className="mt-12 border">
          <img className="w-12 rounded-full mx-auto" src={jennie} alt="" />
          <p className="w-[80%] mx-auto mt-6 mb-8">
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside.
            <br />
            Highly recommended!
          </p>
          <p className="font-fraunces mb-2">Jennie F.</p>
          <p>Business Owner</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
