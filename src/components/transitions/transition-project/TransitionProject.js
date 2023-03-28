import "./TransitionProject.css";
import TabTemplate from "../../../templates/TabTemplate";
import TransitionIntro from "./intro/TransitionIntro";
import TransitionCodepens from "./TransitionCodepens/TransitionCodepens";
function TransitionProject() {
  const links = ["project", "codepens"];
  const content = [<TransitionIntro />, <TransitionCodepens />];
  return (
    <section id="transition-intro">
      <TabTemplate links={links} content={content} />
    </section>
  );
}

export default TransitionProject;
