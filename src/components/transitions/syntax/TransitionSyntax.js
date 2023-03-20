import ListTemplate from "../../../templates/ListTemplate";
import "./TransitionSyntax.css";
function TransitionSyntax() {
  return (
    <section id="transition-syntax">
      <ListTemplate
        title="properties"
        labels={[
          "transition-property",
          "transition-duration",
          "transition-timing-function",
          "transition-delay",
        ]}
        content={[]}
      />

      <ListTemplate
        title="short hand"
        labels={[
          "2 property -- name duration",
          "3 -- name duration delay|easingfunction",
          "4 -- name duration easing delay",
          "mutltiple properties: chain with commas",
          "all",
        ]}
        content={[]}
      />

      <ListTemplate
        title="definitive discussion"
        labels={[
          [
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition"
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

export default TransitionSyntax;
