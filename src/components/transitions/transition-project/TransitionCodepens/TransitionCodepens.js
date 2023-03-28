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
            class="big-button"
          >
            step one
          </button>
        </li>
        <li>
          <h3>add additional animations:</h3>

          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/rNZRWQE?editors=1100",
                "_blank"
              )
            }
            class="big-button"
          >
            step two
          </button>
        </li>
        <li>
          <h3>super common svg gotchas:</h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/xxaBRMw",
                "_blank"
              )
            }
            class="big-button"
          >
            step three
          </button>
        </li>
        <li>
          <h3>let's animate:</h3>
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/mdGoOoM",
                "_blank"
              )
            }
            class="big-button"
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
        class="big-button"
      >
        step five
      </button>
	  </li><li>
	  <h3>one possible solution:</h3>
      <button
        onClick={() =>
          window.open("https://codepen.io/warpedpuppy/pen/oNPVRVx", "_blank")
        }
        class="big-button"
      >
        step six
      </button>
	  </li></ol>
    </div>
  );
}

export default TransitionCodepens;
