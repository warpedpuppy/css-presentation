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
