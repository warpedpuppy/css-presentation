import TabTemplate from "../../templates/TabTemplate";
import "./Easing.css";

function Examples() {
  return (
    <section id="easing">
      <div className="ease-example">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 50">
          <rect className="cls-1" width="500" height="50" />
          <polygon
            className="arrow"
            points="16.98 16.78 16.98 5 40 25 16.98 45 16.98 33.22 0 33.22 0 16.78 16.98 16.78"
          />
        </svg>
        <h4>ease</h4>
      </div>

      <div className="ease-example">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 50">
          <rect className="cls-1" width="500" height="50" />
          <polygon
            className="arrow"
            points="16.98 16.78 16.98 5 40 25 16.98 45 16.98 33.22 0 33.22 0 16.78 16.98 16.78"
          />
        </svg>
        <h4>linear</h4>
      </div>

      <div className="ease-example">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 50">
          <rect className="cls-1" width="500" height="50" />
          <polygon
            className="arrow"
            points="16.98 16.78 16.98 5 40 25 16.98 45 16.98 33.22 0 33.22 0 16.78 16.98 16.78"
          />
        </svg>
        <h4>ease-in</h4>
      </div>

      <div className="ease-example">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 50">
          <rect className="cls-1" width="500" height="50" />
          <polygon
            className="arrow"
            points="16.98 16.78 16.98 5 40 25 16.98 45 16.98 33.22 0 33.22 0 16.78 16.98 16.78"
          />
        </svg>
        <h4>ease-out</h4>
      </div>

      <div className="ease-example">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 50">
          <rect className="cls-1" width="500" height="50" />
          <polygon
            className="arrow"
            points="16.98 16.78 16.98 5 40 25 16.98 45 16.98 33.22 0 33.22 0 16.78 16.98 16.78"
          />
        </svg>
        <h4>ease-in-out</h4>
      </div>

      <div className="ease-example">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 50">
          <rect className="cls-1" width="500" height="50" />
          <polygon
            className="arrow"
            points="16.98 16.78 16.98 5 40 25 16.98 45 16.98 33.22 0 33.22 0 16.78 16.98 16.78"
          />
        </svg>
        <h4>custom</h4>
        <div className="easing-credit">
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
	  <button
            onClick={() =>
              window.open(
                "https://codepen.io/warpedpuppy/pen/OJoGLMR",
                "_blank"
              )
            }
            className="big-button"
          >
            codepen
          </button>
    </section>
  );
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
  );
}

function Easing() {
  return (
    <TabTemplate
      links={["examples", "link to visualizer"]}
      content={[<Examples />, <Visualizer />]}
    />
  );
}

export default Easing;
