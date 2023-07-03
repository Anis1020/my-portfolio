import anis from "../../assets/anis pic.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="flex items-center justify-around my-12 flex-col md:flex-row">
        <img src={anis} className="w-64 h-64 rounded-full mb-4" alt="" />
        <div className="mt-10">
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
        </div>
      </div>
    </>
  );
};

export default AboutMe;
