import TabTemplate from "../../../templates/TabTemplate";
import "./CreateSVGs.css";

const OnlineGenerator = () => {
  return (
    <div className="create-svgs-text">
      <p>
        There are several free online svg generators. One of them is "haikei"
        and you can get to it by clicking the button below.
      </p>
      <p>
        The svgs you can create with Haikei are pretty limited though. If you
        want to really get into SVG creation, consider clicking the other tab
        and looking at the free software that's available.
      </p>

      <a
        href="https://app.haikei.app/"
        target="_blank"
        rel="noreferrer"
        className="big-button"
      >
        haikei
      </a>
    </div>
  );
};

const SVGSoftware = () => {
  return (
    <div className="create-svgs-text">
      <p>
        Inkscape is free svg creation software you can download to your computer.  It isn't as famous as Adobe Illustrator (the industry standard), but it is free and free is always awesome.
      </p>
      <p>
        The svgs you can create with Inkscape are limited only by your imagination and how much time you spend figuring out the software.
      </p>
      <a
        href="https://inkscape.org/release/inkscape-1.2.2/"
        target="_blank"
        rel="noreferrer"
        className="big-button"
      >
        inkscape
      </a>
    </div>
  );
};

function CreateSVGs() {
  const links = ["online generator", "free svg software"];
  const content = [<OnlineGenerator />, <SVGSoftware />];
  return (
    <section id="create-svgs">
      <h3>How can I create svgs?</h3>
      <TabTemplate title="create svgs" links={links} content={content} />
    </section>
  );
}

export default CreateSVGs;
