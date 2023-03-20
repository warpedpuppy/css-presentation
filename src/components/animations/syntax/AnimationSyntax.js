import "./AnimationSyntax.css";
import AnimimationPlayState from '../examples/Examples'
import ListTemplate from "../../../templates/ListTemplate";
function AnimationSyntax() {
 
  return (
    <section id="syntax-list">

		<ListTemplate 
		title='properties'
		labels={['animation-name', 'animation-duration', 'animation-timing-function', 'animation-delay', ['animation-direction',<span class="asterisk">*</span>], ['animation-fill-mode',<span class="asterisk">*</span>], ['animation-iteration-count',<span class="asterisk">*</span>], ['animation-play-state',<span class="asterisk">*</span>]]}
		content={[]}
		aside={[ <span class="asterisk">*</span>,'does not exist in transitions']}/>
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
            <div className="discussion"><AnimimationPlayState /></div>
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
		  <div className="label">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation"
              target="_blank"
              rel="noreferrer"
            >
              mdn
            </a>
			</div>
          </li>
        </ul>
    </section>
  );
}

export default AnimationSyntax;
