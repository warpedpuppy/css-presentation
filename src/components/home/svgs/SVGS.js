import "./SVGS.css";
import TabTemplate from "../../../templates/TabTemplate";

function Video(){
	return (
		<iframe
		title="video explaining how to find svgs"
		width="640"
		height="360"
		src="https://www.loom.com/embed/7d2bfdd1a9904595ac7e9169ed1806af"
		frameborder="0"
		webkitallowfullscreen
		mozallowfullscreen
		allowfullscreen
	  ></iframe>
	)
}

function Create(){
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
            <a href="https://app.haikei.app/" target="_blank" rel="noreferrer" className="big-pink-button">
              haikei
            </a>
          </li>
        </ul>
	)
}

function SVGS() {
  return (
    <section id="svgs">
		<h3>svgs</h3>
		<TabTemplate 
			links={['where are my svgs?', 'how can I make svgs?']} 
			content={[<Video />, <Create />]}
			/>
    </section>
  );
}

export default SVGS;
