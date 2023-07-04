import Marquee from "react-fast-marquee";

import vsCode from "../../assets/tools-icon/icons8-visual-studio-code-insides-48.png";
import photoShop from "../../assets/tools-icon/icons8-adobe-photoshop-48.png";

import Canva from "../../assets/tools-icon/icons8-canva-100.png";
import msOffice from "../../assets/tools-icon/icons8-microsoft-48.png";
import camtasia from "../../assets/tools-icon/icons8-camtasia-studio-48.png";
import github from "../../assets/tools-icon/icons8-github-50.png";
import figma from "../../assets/tools-icon/icons8-figma-64.png";
import chrome from "../../assets/tools-icon/icons8-chrome-logo.gif";
import wordpress from "../../assets/tools-icon/icons8-wordpress-48.png";

const Tools = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl text-primary underline">Tools</h2>
      <h2>I am Comfort with those tools</h2>
      <Marquee className="my-4 shadow-2xl p-3">
        <div className="ml-8  border-double border-4 border-sky-500 p-3">
          <img src={vsCode} className="m-auto text-5xl w-20 h-20"></img>
          <small>Vs Code</small>
        </div>
        <h2 className="ml-6  border-double border-4 border-sky-500 p-3">
          <img src={photoShop} className="m-auto text-5xl w-20 h-20"></img>
          <small>photoShop</small>
        </h2>
        <h2 className="ml-6  border-double border-4 border-sky-500 p-3">
          <img src={Canva} className="m-auto text-5xl w-20 h-20"></img>
          <small>Canva</small>
        </h2>
        <h2 className="ml-6  border-double border-4 border-sky-500 p-3">
          <img src={msOffice} className="m-auto text-5xl w-20 h-20"></img>
          <small>MsOffice</small>
        </h2>
        <h2 className="ml-6  border-double border-4 border-sky-500 p-3">
          <img src={camtasia} className="m-auto text-5xl w-20 h-20"></img>
          <small>Camtasia</small>
        </h2>
        <h2 className="ml-6  border-double border-4 border-sky-500 p-3">
          <img src={github} className="m-auto text-5xl w-20 h-20"></img>
          <small>GitHub</small>
        </h2>
        <h2 className="ml-6  border-double border-4 border-sky-500 p-3">
          <img src={figma} className="m-auto text-5xl w-20 h-20"></img>
          <small>Figma</small>
        </h2>
        <h2 className="ml-6  border-double border-4 border-sky-500 p-3">
          <img src={chrome} className="m-auto text-5xl w-20 h-20"></img>
          <small>Dev Tool</small>
        </h2>
        <h2 className="ml-6  border-double border-4 border-sky-500 p-3">
          <img src={wordpress} className="m-auto text-5xl w-20 h-20"></img>
          <small>Wordpress</small>
        </h2>
      </Marquee>
    </div>
  );
};

export default Tools;
