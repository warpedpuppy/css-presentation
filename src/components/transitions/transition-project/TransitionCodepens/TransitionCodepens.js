import "./TransitionCodepens.css";
function TransitionCodepens() {
  return (
    <div id="transition-codepens">
		<h2>Let's learn transitions!</h2>
      <ol>
        <li>
          <h3>learn the four properties of transitions:</h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/LYJabzV",
                "_blank"
              )
            }
            className="big-button"
          >
            step one
          </button>
        </li>
        <li>
          <h3>sidebar transitions:</h3>

          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/rNZRWQE?editors=1100",
                "_blank"
              )
            }
            className="big-button"
          >
            step two
          </button>
        </li>
        <li>
          <h3>coding a clickable hamburger (without javascript!):</h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/xxaBRMw",
                "_blank"
              )
            }
            className="big-button"
          >
            step three
          </button>
        </li>
        <li>
          <h3>drop down menu:</h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/mdGoOoM",
                "_blank"
              )
            }
            className="big-button"
          >
            step four
          </button>
        </li>
      </ol>
      <hr />
      <h2>fun project for later:</h2>
	  <ol><li>
		<h3>add transitions to this:</h3>
      <button
        onClick={() =>
          window.open(
            "https://codepen.io/warpedpuppy/pen/NWLJZPB?editors=1100",
            "_blank"
          )
        }
        className="big-button"
      >
        step five
      </button>
	  </li><li>
	  <h3>one possible solution:</h3>
      <button
        onClick={() =>
          window.open("https://codepen.io/warpedpuppy/pen/oNPVRVx", "_blank")
        }
        className="big-button"
      >
        step six
      </button>
	  </li></ol>
    </div>
  );
}

export default TransitionCodepens;
