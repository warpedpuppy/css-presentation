import ListTemplate from "../../../templates/ListTemplate";
import "./TransitionSyntax.css";

// const Properties = () => {
//   return (
//     <iframe
//       height="300"
//       style={{ width: "100%", height: "700px" }}
//       scrolling="no"
//       title="Untitled"
//       src="https://codepen.io/warpedpuppy/embed/oNPOqPw?default-tab=result"
//       frameBorder="no"
//       loading="lazy"
//       allowtransparency="true"
//       allowfullscreen="true"
//     >
//       See the Pen{" "}
//       <a href="https://codepen.io/warpedpuppy/pen/oNPOqPw">Untitled</a> by ted (
//       <a href="https://codepen.io/warpedpuppy">@warpedpuppy</a>) on{" "}
//       <a href="https://codepen.io">CodePen</a>.
//     </iframe>
//   );
// };
// const TransitionDuration = () => {
//   return (
//     <iframe
//       height="300"
//       style={{ width: "100%", height: "500px" }}
//       scrolling="no"
//       title="Untitled"
//       src="https://codepen.io/warpedpuppy/embed/WNgWJXv?default-tab=result"
//       frameBorder="no"
//       loading="lazy"
//       allowtransparency="true"
//       allowfullscreen="true"
//     >
//       See the Pen{" "}
//       <a href="https://codepen.io/warpedpuppy/pen/WNgWJXv">Untitled</a> by ted (
//       <a href="https://codepen.io/warpedpuppy">@warpedpuppy</a>) on{" "}
//       <a href="https://codepen.io">CodePen</a>.
//     </iframe>
//   );
// };
// const TransitionTimingFunction = () => {
//   return (
//     <iframe
//       height="300"
//       style={{ width: "100%", height: "400px" }}
//       scrolling="no"
//       title="animation duration example"
//       src="https://codepen.io/warpedpuppy/embed/VwGNxEq?default-tab=result"
//       frameBorder="no"
//       loading="lazy"
//       allowtransparency="true"
//       allowfullscreen="true"
//     >
//       See the Pen{" "}
//       <a href="https://codepen.io/warpedpuppy/pen/VwGNxEq">
//         animation duration example
//       </a>{" "}
//       by ted (<a href="https://codepen.io/warpedpuppy">@warpedpuppy</a>) on{" "}
//       <a href="https://codepen.io">CodePen</a>.
//     </iframe>
//   );
// };

// const TransitionDelayExample = () => {
//   return (
//     <iframe
//       height="300"
//       style={{ width: "100%", height: "400px" }}
//       scrolling="no"
//       title="transition duration example"
//       src="https://codepen.io/warpedpuppy/embed/QWVPrRG?default-tab=result"
//       frameBorder="no"
//       loading="lazy"
//       allowtransparency="true"
//       allowfullscreen="true"
//     >
//       See the Pen{" "}
//       <a href="https://codepen.io/warpedpuppy/pen/QWVPrRG">
//         transition duration example
//       </a>{" "}
//       by ted (<a href="https://codepen.io/warpedpuppy">@warpedpuppy</a>) on{" "}
//       <a href="https://codepen.io">CodePen</a>.
//     </iframe>
//   );
// };
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
        content={[
        //   <Properties />,
        //   <TransitionDuration />,
        //   <TransitionTimingFunction />,
		//   <TransitionDelayExample />
        ]}
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
