import "./AnimationSyntax.css";
function AnimationSyntax() {
  return (
    <section id="syntax-list">
      <div>
        <h4>properties:</h4>
        <ul>
          <li>
            <input type="checkbox" />
            <div className="label">animation-name</div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">animation-duration</div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">animation-timing-function</div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">animation-delay</div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">
              animation-direction<span class="asterisk">*</span>
            </div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">
              animation-fill-mode<span class="asterisk">*</span>
            </div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">
              animation-iteration-count<span class="asterisk">*</span>
            </div>
            <div className="discussion">discussion</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className="label">
              animation-play-state<span class="asterisk">*</span>
            </div>
            <div className="discussion">discussion</div>
          </li>
        </ul>
        <div class="aside">
          <span class="asterisk">*</span>does not exist in transitions
        </div>
        <h4>short hand:</h4>
        <ul>
          <li>
            duration | easing-function | delay | iteration-count | direction |
            fill-mode | play-state | name
          </li>
          <li>3s linear 1s slidein</li>
          <li>mutltiple properties: chain with commas</li>
        </ul>
        <h4>definitive discussion:</h4>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation"
              target="_blank"
              rel="noreferrer"
            >
              mdn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AnimationSyntax;
