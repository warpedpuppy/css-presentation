import "./Squares.css";
function Squares() {
  return (
	<div>
    <svg id="squares" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250">
      <rect class="leftBack vertBox" height="250" width="250" />
      <rect class="rightBack vertBox" height="250" width="250" />

      <rect class="topBack horizBox" height="250" width="500" />
      <rect class="bottomBack horizBox" height="250" width="500" />

      <rect class="leftMiddle vertBox" height="250" width="250" />
      <rect class="rightMiddle vertBox" height="250" width="250" />

      <rect class="topMiddle horizBox" height="250" width="500" />
      <rect class="bottomMiddle horizBox" height="250" width="500" />

      <rect class="leftTop vertBox" height="250" width="250" />
      <rect class="rightTop vertBox" height="250" width="250" />

      <rect class="topTop horizBox" height="250" width="500" />
      <rect class="bottomTop horizBox" height="250" width="500" />
    </svg>
	<button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/MWqbqBQ",
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

export default Squares;
