import "./Lines.css";
function Lines() {
  return (
	<div>
    <div id="lines-cont">
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
	<button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/LYJMOYO",
                "_blank"
              )
            }
            class="big-button"
          >
            link to codepen
          </button>
	</div>
  );
}

export default Lines;
