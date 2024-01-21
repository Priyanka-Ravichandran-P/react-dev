import { GIF_URL } from "../utils/constant";

const About = () => {
  return (
    <div  className="contents">
      <div >
        <h1 className="text-orange-700 m-auto p-4 text-center text-2xl font-bold" >
          🍨🍩🎂 Welcome to Priyanka Catering - Where Flavor And Health Meets
          Passion!!! 🍜🍒🥝
        </h1>
      </div>

      <div className="contents text-center ml-auto mr-auto w-full p-4 text-orange-700 font-bold text-lg">
        <img className=" ml-auto mr-auto justify-center" src={GIF_URL} alt="loading..." />
        <h2>Health Is Wealth And You Deserve That! Stay Healthy 😎</h2>
      </div>
      <div className="m-3 p-3 text-orange-700 font-sans">
        <h2 className="text-xl font-semibold">Our Mission 🎀,</h2>
        <p className="text-lg">
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
