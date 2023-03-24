import "./Home.css";
import "./WelcomeStars.css";
import { Link } from "react-router-dom";
import FindSVGS from "./find-svgs/FindSVGS";
import CreateSVGs from "./create/CreateSVGs";
import Validate from "./validate/Validate";
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
            <a href="#svgs">Locate relevant SVGs and add to page.</a>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
          <li>
            <a href="#create-svgs">Learn where you can create SVGs</a>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
          <li>
            <Link to="/transitions/transition-project">Code CSS Transitions</Link>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
          <li>
            <Link to="/animations/animation-project">Code CSS Animations</Link>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
          <li>
            <a href="#validate">
              Validate CSS code using industry standard tools
            </a>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
          <li>
            <a href="#practice">Practice</a>
            <img src="/images/pointing-finger.png" alt="pointing finger" />
          </li>
        </ul>
      </section>

      <FindSVGS />

      <CreateSVGs />

      <Validate />
    </section>
  );
}

export default Home;
