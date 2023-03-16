import "./SVGS.css";
import TabTemplate from "../../../templates/TabTemplate";

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

function Create() {
  return (
    <ul className="svg-create-buttons">
      <li>
        <a
          href="https://inkscape.org/release/inkscape-1.2.2/"
          target="_blank"
          rel="noreferrer"
          className="big-pink-button"
        >
          inkscape
        </a>
      </li>
      <li>
        <a
          href="https://app.haikei.app/"
          target="_blank"
          rel="noreferrer"
          className="big-pink-button"
        >
          haikei
        </a>
      </li>
    </ul>
  );
}

function SVGS() {
  return (
    <section id="svgs">
      <h3>svgs</h3>
      <TabTemplate
        links={["where are my svgs?", "how can I make svgs?"]}
        content={[<Video />, <Create />]}
      />
    </section>
  );
}

export default SVGS;
