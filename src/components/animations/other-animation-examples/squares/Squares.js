import "./Squares.css";
function Squares() {
  return (
	<div>
    <svg id="squares" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250">
      <rect className="leftBack vertBox" height="250" width="250" />
      <rect className="rightBack vertBox" height="250" width="250" />

      <rect className="topBack horizBox" height="250" width="500" />
      <rect className="bottomBack horizBox" height="250" width="500" />

      <rect className="leftMiddle vertBox" height="250" width="250" />
      <rect className="rightMiddle vertBox" height="250" width="250" />

      <rect className="topMiddle horizBox" height="250" width="500" />
      <rect className="bottomMiddle horizBox" height="250" width="500" />

      <rect className="leftTop vertBox" height="250" width="250" />
      <rect className="rightTop vertBox" height="250" width="250" />

      <rect className="topTop horizBox" height="250" width="500" />
      <rect className="bottomTop horizBox" height="250" width="500" />
    </svg>
	<button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/MWqbqBQ",
                "_blank"
              )
            }
            className="big-button"
          >
            link to codepen
          </button>
	</div>
	
  );
}

export default Squares;
