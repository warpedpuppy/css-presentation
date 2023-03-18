import "./TransitionSyntax.css";
function TransitionSyntax() {
  return (
    <section id="syntax-list">
      <div>
        <h4>properties:</h4>
        <ul>
          <li>
            <input type="checkbox" />
            <div className="label">transition-property</div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">transition-duration</div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">transition-timing-function</div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">transition-delay</div>
            <div className="discussion">discussion</div>
          </li>
        </ul>

        <h4>short hand:</h4>
        <ul>
          <li>2 property -- name duration</li>
          <li>3 -- name duration delay|easingfunction</li>
          <li>4 -- name duration easing delay</li>
          <li>mutltiple properties: chain with commas</li>
          <li>all</li>
        </ul>

        <h4>definitive discussion:</h4>
        <ul>
          <li>
		  <div className="label"><a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition"
              target="_blank"
              rel="noreferrer"
            >
              mdn
            </a></div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TransitionSyntax;
