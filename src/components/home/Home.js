import "./Home.css";
import "./WelcomeStars.css";
import { Link } from "react-router-dom";
import FindSVGS from "./find-svgs/FindSVGS";
import CreateSVGs from "./create/CreateSVGs";
import Validate from "./validate/Validate";
import Introduction from "./introduction/Introduction";
function Home() {
  return (
    <section id="home-page">
      <div id="welcome-div">
        <img src="/images/star.svg" alt="star graphic to emphasize welcome" />
        <h1>welcome!</h1>
      </div>
      <section id="welcome">
        <h4>goals of this talk:</h4>
        <ul>
          <li>
            <a href="#svgs">Add SVGs to your page!</a>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
		  <li>
            <a href="#validate">Validate CSS!</a>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
          {/* <li>
            <a href="#create-svgs">Learn where you can create svgs</a>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li> */}
          <li>
            <Link to="/transitions/transition-project">Code CSS Transitions!</Link>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
          <li>
            <Link to="/animations/animation-project">Code CSS Animations!</Link>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
         
          <li>
            <a href="#whoami">Who am I?</a>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
        </ul>
      </section>

      <FindSVGS />

      <CreateSVGs />

      <Validate />
	 	<Introduction />
    </section>
  );
}

export default Home;
