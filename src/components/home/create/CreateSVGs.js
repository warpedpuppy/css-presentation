import TabTemplate from "../../../templates/TabTemplate";

const OnlineGenerator = () => {
	return (<a
		href="https://app.haikei.app/"
		target="_blank"
		rel="noreferrer"
		className="big-button"
	  >
		haikei
	  </a>)
}

const SVGSoftware = () => {
return (<a
	href="https://inkscape.org/release/inkscape-1.2.2/"
	target="_blank"
	rel="noreferrer"
	className="big-button"
  >
	inkscape
  </a>)
}

function CreateSVGs() {
	const links = ['online generator', 'free svg software']
	const content = [<OnlineGenerator />, <SVGSoftware />]
	return (
		<section id="create-svgs">
			 <h3>How can I create svgs?</h3>
			<TabTemplate title="create svgs" links={links} content={content} />
		</section>
	  );
}

export default CreateSVGs;