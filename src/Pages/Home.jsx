import AboutMe from "../Components/Home/AboutMe";
import Banner from "../Components/Home/Banner";
import MyProjects from "../Components/Home/MyProjects";
import Skills from "../Components/Home/Skills";
import Tools from "../Components/Home/Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skills />
      <Tools />
      <MyProjects />
    </div>
  );
};

export default Home;
