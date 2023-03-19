import "./Easing.css";
function Easing() {
  return (
    <section id="easing">
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
          credit:
          <a
            href="https://codepen.io/setswon/pen/VJeXXq"
            rel="noreferrer"
            target="_blank"
          >
            https://codepen.io/setswon/pen/VJeXXq
          </a>
        </div>
      </div>
      <a className="big-button" href="https://matthewlein.com/tools/ceaser" target="_blank" rel="noreferrer">easing visualization tool</a>
    </section>
  );
}

export default Easing;
