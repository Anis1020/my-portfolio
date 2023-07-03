import { Typewriter } from "react-simple-typewriter";
import anis from "../../assets/anis pic.jpg";

const Banner = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row p-5 items-center justify-around bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div>
        <h2 className="text-2xl text-black">Hi There, I am Anisur Rahman</h2>
        <h2>
          <strong className="text-black text-xl">I am a Passionate</strong>
          <span style={{ color: "yellow", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                " Web Developer",
                " Designer",
                " Problem Solver",
                " Marne Stack Developer!",
              ]}
              loop={2}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </h2>

        <div className="space-x-4">
          <button className="btn mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <a href="Anis-Resume.pdf" download>
              Download Resume
            </a>
          </button>
          <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            Hire Me
          </button>
        </div>
      </div>
      <div>
        <img src={anis} className="w-64 h-64 rounded-full mb-4" alt="" />
      </div>
    </div>
  );
};

export default Banner;
