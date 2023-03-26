import "./TransitionProject.css";
import TabTemplate from "../../../templates/TabTemplate";
import TransitionIntro from "./intro/TransitionIntro";
function TransitionProject() {
  const links = ["project", "codepens"];
  const content = [<TransitionIntro />, <p>put codepens here</p>];
  return (
    <section id="transition-intro">
      <h4>Let's build this together!</h4>
      <TabTemplate links={links} content={content} />
    </section>
  );
}

export default TransitionProject;
