import ReactPlayer from "react-player";
import { GIF_URL } from "../utils/constant";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>
          🍨🍩🎂 Welcome to Priyanka Catering - Where Flavor And Health Meets
          Passion!!! 🍜🍒🥝
        </h1>
      </div>

      <div className="logo-gif">
        <img src={GIF_URL} alt="loading..." />
        <h2>Health Is Wealth And You Deserve That! Stay Healthy 😎</h2>
      </div>
      <div className="mission">
        <h2 className="mission-heading">Our Mission 🎀,</h2>
        <p className="mission-content">
          At Priyanka Catering, our mission is to inspire and empower
          individuals to explore the world of flavors, try new recipes, and
          create memorable dining experiences. We believe that everyone can be a
          chef in their own kitchen, and our platform is here to support you on
          that culinary journey.
        </p>
      </div>
    </div>
  );
};
export default About;
