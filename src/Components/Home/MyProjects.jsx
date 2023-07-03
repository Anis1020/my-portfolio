import sportsSchool from "../../assets/projects img/Sports School Project.png";
const MyProjects = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl text-primary underline">My Projects</h2>
      <div className="my-12 flex flex-col md:flex-row">
        <div className=" w-[400px] h-full ">
          <img
            src={sportsSchool}
            className=" w-[400px] h-[370px] object-cover object-top hover:object-bottom"
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
        <div className=" w-[400px] h-full ">
          <img
            src={sportsSchool}
            className=" w-[400px] h-[370px] object-cover object-top hover:object-bottom"
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
        <div className=" w-[400px] h-full ">
          <img
            src={sportsSchool}
            className=" w-[400px] h-[370px] object-cover object-top hover:object-bottom"
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
