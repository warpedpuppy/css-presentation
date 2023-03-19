import "./SVGS.css";
import TabTemplate from "../../../templates/TabTemplate";

function Find() {
	return (
		<div>
			<h4>navigate directory structure -- finding files!</h4>
	  <ul>
		<li>/</li>
		<li>./</li>
		<li>../</li>
      </ul>
	  </div>
	);
  }

function Video() {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}>
      <iframe
        title="finding svgs"
        src="https://www.loom.com/embed/8c4d5f10039944cdb3e4fdd073d7a1e4"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
}

function SVGS() {
  return (
    <section id="svgs">
      <h3>where are my svgs?</h3>
      <TabTemplate
        links={["navigate directory structure", "video navigating dir structure"]}
        content={[<Find />, <Video />]}
		title="navitate directory structure"
      />
    </section>
  );
}

export default SVGS;
