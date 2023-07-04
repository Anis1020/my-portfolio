import sportsSchool from "../../assets/projects img/Sports School Project.png";
const MyProjects = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl text-primary underline">My Projects</h2>
      <div className="my-12 flex flex-col gap-3 md:flex-row">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-[350px] md:w-[400px] h-full shadow-2xl my-8 md:my-0 p-4 "
        >
          <img
            src={sportsSchool}
            className=" w-full h-[370px] object-cover object-top duration-1000 hover:object-bottom"
            alt=""
          />
          <h2 className="text-2xl text-primary my-3">Sports School</h2>
          <h2>
            This is a full stack sports trading school website. It has firebase
            authentication, stripe payment gateway, admin instructor and user
            panel, order tracking system, etc.
          </h2>
          <button className="btn mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            See Details
          </button>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-[350px] md:w-[400px] h-full my-8 md:my-0 p-4 shadow-2xl "
        >
          <img
            src={sportsSchool}
            className=" w-[400px] h-[370px] object-cover duration-1000 object-top hover:object-bottom"
            alt=""
          />
          <h2 className="text-2xl text-primary my-3">Sports School</h2>
          <h2>
            This is a full stack sports trading school website. It has firebase
            authentication, stripe payment gateway, admin instructor and user
            panel, order tracking system, etc.
          </h2>
          <button className="btn mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            See Details
          </button>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-[350px] md:w-[400px] h-full my-8 md:my-0 p-4 shadow-2xl "
        >
          <img
            src={sportsSchool}
            className=" w-[400px] h-[370px] object-cover duration-1000 object-top hover:object-bottom"
            alt=""
          />
          <h2 className="text-2xl text-primary my-3">Sports School</h2>
          <h2>
            This is a full stack sports trading school website. It has firebase
            authentication, stripe payment gateway, admin instructor and user
            panel, order tracking system, etc.
          </h2>
          <button className="btn mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
