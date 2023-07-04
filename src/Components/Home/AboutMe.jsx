import anis from "../../assets/anis pic.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="flex items-center gap-5 justify-around my-12 flex-col md:flex-row">
        <img
          data-aos="flip-left"
          src={anis}
          className="w-64 h-64 rounded-full  shadow-2xl p-3 mb-4"
          alt=""
        />
        <div data-aos="flip-left" className="mt-10 shadow-2xl p-3">
          <h2>
            <strong className="text-2xl text-primary underline">
              About Me
            </strong>
          </h2>
          <h2>
            <strong>I am Anisur Rahman,</strong> I am Fulltime Passionate web
            Developer
          </h2>
          <p> I have been working on web development since 1 year.</p>
          <p>
            and I love to learn new thing in everyday that why i am still
            learning
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
