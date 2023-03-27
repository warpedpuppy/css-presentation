import "./AnimationCodepens.css";
function AnimationCodepens() {
  return (
    <div id="animation-codepens">
      
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/XWPGpJJ",
                "_blank"
              )
            }
            class="big-button"
          >
            step one
          </button>
       
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/poOYRvB",
                "_blank"
              )
            }
            class="big-button"
          >
            step two
          </button>
      
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/PodLWqe",
                "_blank"
              )
            }
            class="big-button"
          >
            step three
          </button>
       
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/GRXerpQ",
                "_blank"
              )
            }
            class="big-button"
          >
            step four
          </button>

		  <hr />

		  <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/PodLWZe",
                "_blank"
              )
            }
            class="big-button"
          >
            step five
          </button>
       
          <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/rNZRjeV",
                "_blank"
              )
            }
            class="big-button"
          >
            step six
          </button>
      
    </div>
  );
}

export default AnimationCodepens;
