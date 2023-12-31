import AboutMe from "../Components/Home/AboutMe";
import Banner from "../Components/Home/Banner";
import ContactMe from "../Components/Home/ContactMe";
import MyProjects from "../Components/Home/MyProjects";
import Skills from "../Components/Home/Skills";
import Tools from "../Components/Home/Tools";
import "./Home.css";

const Home = () => {
  return (
    <div className="my-bg">
      <Banner />
      <AboutMe />
      <Skills />
      <Tools />
      <MyProjects />
      <ContactMe />
    </div>
  );
};

export default Home;
