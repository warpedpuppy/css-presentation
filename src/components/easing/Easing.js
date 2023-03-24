import TabTemplate from "../../templates/TabTemplate";
import "./Easing.css";

function Examples() {
	return ( <section id="easing">
	<div id="track-0" className="track">
	  <h4>ease</h4>
	  <img src="/images/train.png" alt="train" />
	</div>
	<div id="track-1" className="track">
	  <h4>linear</h4>
	  <img src="/images/train.png" alt="train" />
	</div>
	<div id="track-2" className="track">
	  <h4>ease-in</h4>
	  <img src="/images/train.png" alt="train" />
	</div>
	<div id="track-3" className="track">
	  <h4>ease-out</h4>
	  <img src="/images/train.png" alt="train" />
	</div>
	<div id="track-4" className="track">
	  <h4>ease-in-out</h4>
	  <img src="/images/train.png" alt="train" />
	</div>
	<div id="track-5" className="track">
	  <h4>custom</h4>
	  <img src="/images/train.png" alt="train" />
	  <div class="easing-credit">
		credit for the custom one:
		<a
		  href="https://codepen.io/setswon/pen/VJeXXq"
		  rel="noreferrer"
		  target="_blank"
		>
		  https://codepen.io/setswon/pen/VJeXXq
		</a>
	  </div>
	</div>
  </section>)
}

function Visualizer() {
	return (
		<a
        className="big-button"
        href="https://matthewlein.com/tools/ceaser"
        target="_blank"
        rel="noreferrer"
      >
        easing visualization tool
      </a>
	)
}

function Easing() {
  return (
   <TabTemplate links={['examples', 'link to visualizer']} content={[<Examples />, <Visualizer />]} />
  );
}

export default Easing;
