import "./TransitionCodepens.css";
function TransitionCodepens() {
  return (
    <div id="transition-codepens">
      
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
      
    </div>
  );
}

export default TransitionCodepens;
