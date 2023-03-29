import "./AnimationCodepens.css";
function AnimationCodepens() {
  return (
    <div id="animation-codepens">
      <h2>let's animate!</h2>
	  <ol><li>
		<h3>The 8 properties of animations: </h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/XWPGpJJ",
                "_blank"
              )
            }
            className="big-button"
          >
            step one
          </button>
		  </li><li>
		  <h3>Animating multiple characteristics at once: </h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/poOYRvB",
                "_blank"
              )
            }
            className="big-button"
          >
            step two
          </button>
		  </li><li>
		  <h3>Extremely important svg gotchas: </h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/PodLWqe",
                "_blank"
              )
            }
            className="big-button"
          >
            step three
          </button>
		  </li><li>
		  <h3>Let's animate together: </h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/GRXerpQ",
                "_blank"
              )
            }
            className="big-button"
          >
            step four
          </button>
		  </li></ol>

		  <hr />
		  <h2>fun home project for later!</h2>
		  <ol><li>
		  <h3>Can you animate the following: </h3>
		  <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/PodLWZe",
                "_blank"
              )
            }
            className="big-button"
          >
            step five
          </button>
		  </li><li>
		  <h3>One possible solution: </h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/rNZRjeV",
                "_blank"
              )
            }
            className="big-button"
          >
            step six
          </button>
		  </li></ol>
    </div>
  );
}

export default AnimationCodepens;
