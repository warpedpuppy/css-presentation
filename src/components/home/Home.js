import "./Home.css";
import "./WelcomeStars.css";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <section id="home-page">
		<div id="welcome-div">
			<img src="/images/star.svg" alt="star graphic to emphasize welcome" />
			<h1>welcome!</h1>
		</div>
      <section>
        <h4>goals of this talk:</h4>
        <ul>
          <li><a href="#svgs">Locate relevant SVG file(s) and add to page</a><img src="/images/pointing-finger.png" alt='pointing finger' /></li>
		  <li><Link to="/transitions">Code CSS Transitions</Link><img src='/images/pointing-finger.png' alt='pointing finger' /></li>
          <li><Link to="/animations">Code CSS Animations</Link><img src='/images/pointing-finger.png' alt='pointing finger' /></li>
          <li><a href="#validate">Validate CSS code using industry standard tools</a><img src='/images/pointing-finger.png' alt='pointing finger' /></li>
		  <li><a href="#practice">Practice</a><img src='/images/pointing-finger.png' alt='pointing finger' /></li>
        </ul>
      </section>

      <section id="svgs">
        <h4>
          create and locate svgs:
        </h4>
        <p>create svgs for free:</p>

		<ul className="homepage-tabs">
			<li>where are my svgs?</li>
			<li>how can I make svgs?</li>
		</ul>

		<div class="homeapage-tabbody make-svgs">
			<ul>
			<li>
				<a
				href="https://inkscape.org/release/inkscape-1.2.2/"
				target="_blank"
				rel="noreferrer"
				>
				inkscape
				</a>
			</li>
			<li>
				<a href="https://app.haikei.app/" target="_blank" rel="noreferrer">
				haikei
				</a>
			</li>
			</ul>
		</div>

		<div class="homeapage-tabbody find-svgs">
			<iframe title="video explaining how to find svgs" width="640" height="360" src="https://www.loom.com/embed/7d2bfdd1a9904595ac7e9169ed1806af" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		</div>


      </section>
      <section id="validate">
        <h4>Validate CSS code using industry standard tools</h4>
		<a href="https://stylelint.io/" target="_blank" rel="noreferrer">stylelint</a>
      </section>
	  <section id="validate">
        <h4>practice</h4>
      </section>
    </section>
  );
}

export default Home;
