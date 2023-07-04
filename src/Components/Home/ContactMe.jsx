import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yw0n5h8",
        "template_6kxxjep",
        form.current,
        "9NM_-Gu5NaAIF1h6e"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div data-aos="zoom-out">
        <h2 className="text-2xl text-primary underline">My Contact Info</h2>
        <p className="w-full md:w-5/12 m-auto mt-2">
          Contact me directly through the provided form or reach out via the
          provided contact details to discuss potential collaborations, project
          inquiries, or any other questions you may have.
        </p>
      </div>
      <div className="my-5 flex flex-col md:flex-row gap-10 items-center">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full md:w-6/12"
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="card-body shadow-2xl ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="input  border-2 border-pink-500"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="from_email"
                  className="input border-2 border-pink-500"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Massage</span>
                </label>
                <textarea
                  className="border-2 border-pink-500"
                  name="message"
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-primary border-2 border-pink-500"
                />
              </div>
            </div>
          </form>
          {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" /> <br /> <br />
            <label>Email</label>
            <input type="email" name="from_email" /> <br /> <br />
            <label>Message</label>
            <textarea name="message" /> <br /> <br />
            <input type="submit" value="Send" />
          </form> */}
        </div>
        <div data-aos="flip-left" className="w-full md:w-6/12 px-10  space-y-4">
          <p className="flex items-center gap-2 text-2xl">
            <FaRegEnvelope />
            <h2 className="">anis.dapunia@gmail.com</h2>
          </p>
          <h2 className="flex items-center gap-2 text-2xl">
            <FaPhoneAlt />
            <span> 01765396339</span>
          </h2>
          <h2 className="flex items-center gap-2 text-2xl">
            <FaLocationArrow /> <span>Pabna Rajshahi Bangladesh</span>
          </h2>
          <p className="flex items-center gap-2 text-2xl ml-8">
            <span className="text-primary">I am also available in</span>
          </p>

          <div className="space-x-6 ml-18 pl-8 md:ml-8 mt-4 flex text-2xl">
            <FaLinkedin></FaLinkedin>
            <FaFacebook></FaFacebook>
            <FaTelegram />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
