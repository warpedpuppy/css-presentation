import "./Home.css";
import "./WelcomeStars.css";
import { Link } from 'react-router-dom';
import SVGS from "./svgs/SVGS";
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
          <li><a href="#svgs">Locate relevant SVG file(s) and add to page</a><img src="/images/pointing-finger.png" alt='pointing finger' /></li>
		  <li><Link to="/transitions">Code CSS Transitions</Link><img src='/images/pointing-finger.png' alt='pointing finger' /></li>
          <li><Link to="/animations">Code CSS Animations</Link><img src='/images/pointing-finger.png' alt='pointing finger' /></li>
          <li><a href="#validate">Validate CSS code using industry standard tools</a><img src='/images/pointing-finger.png' alt='pointing finger' /></li>
		  <li><a href="#practice">Practice</a><img src='/images/pointing-finger.png' alt='pointing finger' /></li>
        </ul>
      </section>

	<SVGS />
      
      <section id="validate">
        <h4>Validate CSS code using industry standard tools</h4>
		<a className="big-pink-button"href="https://stylelint.io/" target="_blank" rel="noreferrer">stylelint</a>
      </section>
	  <section id="validate">
        <h4>practice</h4>
      </section>
    </section>
  );
}

export default Home;
