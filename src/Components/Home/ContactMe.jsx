const ContactMe = () => {
  return (
    <>
      <h2 className="text-2xl text-primary underline">My Contact Info</h2>
      <p className="w-full md:w-5/12 m-auto mt-2">
        Contact me directly through the provided form or reach out via the
        provided contact details to discuss potential collaborations, project
        inquiries, or any other questions you may have.
      </p>
      <div className="my-5 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-6/12">
          <form>
            <div className="card-body shadow-2xl ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  className="input  border-2 border-pink-500"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" className="input border-2 border-pink-500" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Massage</span>
                </label>
                <textarea
                  className="border-2 border-pink-500"
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary border-2 border-pink-500">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-6/12">
          <h2>My Contact Info</h2>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
