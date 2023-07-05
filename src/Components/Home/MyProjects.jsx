import sportsSchool from "../../assets/projects img/Sports School Project.png";
import toySite from "../../assets/projects img/toy website ss.png";
import chef from "../../assets/projects img/chef resturent.png";
import { Link } from "react-router-dom";
const MyProjects = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl text-primary underline">My Projects</h2>

      <div className="my-12 flex flex-col gap-3 md:flex-row">
        <div
          id="1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-[350px] md:w-[400px] h-full shadow-2xl my-6 md:my-0 p-4 "
        >
          <img
            src={sportsSchool}
            className=" w-full h-[370px] object-cover object-top duration-1000 hover:object-bottom"
            alt=""
          />
          <h2 className="text-2xl text-primary my-3">Sports School</h2>
          <Link
            to="https://glittery-genie-ed90a7.netlify.app/"
            className="btn btn-link"
          >
            Live Link
          </Link>
          <Link
            to="https://github.com/Anis1020/sports-course-fullStack"
            className="btn btn-link"
          >
            Clint Link
          </Link>
          <Link
            to="https://github.com/Anis1020/sports-course-fullStack-server"
            className="btn btn-link"
          >
            Server Link
          </Link>
          <h2>
            This is a full stack sports trading school website. It has firebase
            authentication, stripe payment gateway, admin instructor and user
            panel, order tracking system, etc.
          </h2>
          <button
            onClick={() => window.my_modal_5.showModal()}
            className="btn mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            See Details
          </button>
        </div>
        <div
          id="2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-[350px] md:w-[400px] h-full my-6 md:my-0 p-4 shadow-2xl "
        >
          <img
            src={toySite}
            className=" w-[400px] h-[370px] object-cover duration-1000 object-top hover:object-bottom"
            alt=""
          />
          <h2 className="text-2xl text-primary my-3">Toys Market</h2>
          <Link
            to="https://precious-shortbread-9ae62c.netlify.app/"
            className="btn btn-link"
          >
            Live Link
          </Link>
          <Link
            to="https://github.com/Anis1020/toys-clint-fullStack"
            className="btn btn-link"
          >
            Clint Link
          </Link>
          <Link
            to="https://github.com/Anis1020/toys-server-fullStack"
            className="btn btn-link"
          >
            Server Link
          </Link>
          <h2>
            This is a full stack sports trading school website. It has firebase
            authentication, stripe payment gateway, admin instructor and user
            panel, order tracking system, etc.
          </h2>
          <button
            onClick={() => window.my_modal_5.showModal()}
            className="btn mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            See Details
          </button>
        </div>
        <div
          id="3"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-[350px] md:w-[400px] h-full my-6 md:my-0 p-4 shadow-2xl "
        >
          <img
            src={chef}
            className=" w-[400px] h-[370px] object-cover duration-1000 object-top hover:object-bottom"
            alt=""
          />
          <h2 className="text-2xl text-primary my-3">Restaurant</h2>
          <Link
            to="https://incomparable-madeleine-285bd2.netlify.app/"
            className="btn btn-link"
          >
            Live Link
          </Link>
          <Link
            to="https://github.com/Anis1020/cheif-clint-fullStac"
            className="btn btn-link"
          >
            Clint Link
          </Link>
          <Link
            to="https://github.com/Anis1020/chef-server-fullStack"
            className="btn btn-link"
          >
            Server Link
          </Link>
          <h2>
            This is a full stack sports trading school website. It has firebase
            authentication, stripe payment gateway, admin instructor and user
            panel, order tracking system, etc.
          </h2>
          <button
            className="btn mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            onClick={() => window.my_modal_5.showModal()}
          >
            See Details
          </button>
        </div>
      </div>

      {/* Open the modal using ID.showModal() method */}
      {/* <button className="btn" onClick={()=>window.my_modal_5.showModal()}>open modal</button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">
            What technology i use in this website
          </h3>
          <div className="grid grid-cols-3">
            <p className="py-4">Html</p>
            <p className="py-4">Css- Tailwind</p>
            <p className="py-4">JavaScript</p>
            <p className="py-4">react</p>
            <p className="py-4">Express</p>
            <p className="py-4">MongoDB</p>
          </div>
          <h2>
            This website is fully customizable you can add any feature in this
            website , one more thing i am upgrading my website regularly.
          </h2>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default MyProjects;
