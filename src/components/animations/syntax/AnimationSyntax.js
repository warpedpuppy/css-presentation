import "./AnimationSyntax.css";
import ListTemplate from "../../../templates/ListTemplate";
function AnimationSyntax() {
  return (
    <section id="animation-syntax">
      <ListTemplate
        title="properties"
        labels={[
          "animation-name",
          "animation-duration",
          "animation-timing-function",
          "animation-delay",
          ["animation-direction", <span class="asterisk">*</span>],
          ["animation-fill-mode", <span class="asterisk">*</span>],
          ["animation-iteration-count", <span class="asterisk">*</span>],
          ["animation-play-state", <span class="asterisk">*</span>],
        ]}
        content={[<></>]}
        aside={[
          <span class="asterisk">*</span>,
          "does not exist in transitions",
        ]}
      />
      <ListTemplate
        title="definitive discussion"
        labels={[
          [
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation"
              target="_blank"
              rel="noreferrer"
            >
              mdn
            </a>,
          ],
        ]}
        content={[]}
      />
    </section>
  );
}

export default AnimationSyntax;
