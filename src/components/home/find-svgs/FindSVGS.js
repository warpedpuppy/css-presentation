import "./FindSVGS.css";
import TabTemplate from "../../../templates/TabTemplate";
import ListTemplate from "../../../templates/ListTemplate";


function ForwardSlash() {
	return (
		<div class='discussion-text'>
		<p>This is the tricky one! It looks innocent and simple but it does something quite dramatic!</p>
		<p>When there is just a forward slash in front of the path that means that it will start looking in the <b>root of the server</b>.</p>
		<p>Look at your browser window right now.  Up at the top is the "address bar" where you can see the directory structure of the remote server which is hosting the site you're viewing. The <b>root</b> of the server is all the way at the left, right after the domain.</p>
		<p>The video in the second tab will illustrate this further.</p>
		</div>
	)
}
function DotForwardSlash() {
	return (
		<div class='discussion-text'>
		<p>This, in my opinion is the easiest!</p>
		<p>When there is a dot and then a forward slash (or nothing!) in front of the path that means that it will start looking in the <b>current directory</b>.</p>
		<p>so "./someFile.html" means that "someFile.html" is a sibling of the file that you are currently looking at!</p>
		<p>The video in the second tab will illustrate this further.</p>
		</div>
	)
}
function DotDotForwardSlash() {
	return (
		<div class='discussion-text'>
		<p>When there are two dots and then a forward slash in front of the path that means that it will start looking in <b>one above the current directory</b>.</p>
		<p>So "../someFile.html" means that "someFile.html" is a sibling <em>of the parent</em> of the file that you are currently looking at!</p>
		<p>And "../../someFile.html" means that "someFile.html" is a sibling <em>of the grandparent</em> of the file that you are currently looking at!</p>
		<p>The video in the second tab will illustrate this further.</p>
		</div>
	)
}
function Find() {
  return (
    <ListTemplate
      title="navigating directory structure"
      labels={[
        "forward slash (/)",
        "dot forward slash (./) or nothing ()",
        "dot dot forward slash (../)",
      ]}
      content={[<ForwardSlash />, <DotForwardSlash />, <DotDotForwardSlash />]}
	  open={true}
    />
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

function FindSVGS() {
  return (
    <section id="svgs">
      <h3>Locate relevant SVGs and add to page.</h3>
      <TabTemplate
        links={[
          "navigate directory structure",
          "video navigating dir structure",
        ]}
        content={[<Find />, <Video />]}
        title="navitate directory structure"
      />
    </section>
  );
}

export default FindSVGS;
