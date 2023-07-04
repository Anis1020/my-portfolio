import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import anis from "../assets/anis pic.jpg";
const Navbar = () => {
  const handleNavMenu = () => {
    console.log("hi");
  };
  return (
    <div className="bg-slate-500  h-3 p-5 flex  items-center ">
      <div className="flex p-2  items-center">
        <img src={anis} className="w-10 h-10  rounded-full" alt="anis" />
        <FaBars onClick={handleNavMenu} className="md:hidden ml-56"></FaBars>
      </div>
      <div className=" hidden md:block ml-auto ">
        <ul className="flex flex-col md:flex-row space-x-5 border-lime-400">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">My Projects</Link>
          </li>
          <li>
            <Link to="">About Me</Link>
          </li>
          <li>
            <Link to="">Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
