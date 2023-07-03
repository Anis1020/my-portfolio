import {
  FaBootstrap,
  FaCss3Alt,
  FaFireAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import tailwind from "../../assets/tools-icon/icons8-tailwindcss-48.png";
const Skills = () => {
  return (
    <>
      <div className="my-18">
        <h2 className="text-2xl text-primary underline my-5">My Skills</h2>

        <div className="grid grid-cols-4 gap-3 my-4">
          <div className=" border-solid border-4 border-sky-500 px py-1 w-64">
            <FaHtml5 className="m-auto text-4xl text-yellow-500"></FaHtml5>
            <small>HTML</small>
          </div>
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <FaCss3Alt className="m-auto text-4xl text-yellow-500"></FaCss3Alt>
            <small>CSS</small>
          </div>
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <FaBootstrap className="m-auto text-4xl text-yellow-500"></FaBootstrap>
            <small>BS</small>
          </div>
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <img
              src={tailwind}
              className="m-auto text-4xl text-yellow-500"
            ></img>
            <small>BS</small>
          </div>
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <FaJs className="m-auto text-4xl text-yellow-500"></FaJs>
            <small>JavaScript</small>
          </div>
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <FaReact className="m-auto text-4xl text-yellow-500"></FaReact>
            <small>React</small>
          </div>{" "}
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <FaFireAlt className="m-auto text-4xl text-yellow-500"></FaFireAlt>
            <small>Firebase</small>
          </div>
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <FaNodeJs className="m-auto text-4xl text-yellow-500"></FaNodeJs>
            <small>Nodejs</small>
          </div>
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <h2 className="m-auto text-4xl text-yellow-500">ex</h2>
            <small>Express</small>
          </div>
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <h2 className="m-auto text-4xl text-yellow-500">M</h2>
            <small>MongoDB</small>
          </div>
          <div className="border-solid border-4 border-sky-500 px-3 py-1 w-64">
            <h2 className="m-auto text-4xl">Next & TS</h2>
            <small>Next & Ts Coming soon</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
