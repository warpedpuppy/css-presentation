import './AnimationProject.css';
import IntroAnimation from './intro/IntroAnimation';
import TabTemplate from '../../../templates/TabTemplate';
function AnimationProject() {
	const links = ['animations!', 'codepens']
	const content = [<IntroAnimation />, <p>put codepens here</p>]
  return (
    <section id="animation-project">

      <h4>Let's learn how animations work!</h4>
	  <TabTemplate links={links} content={content} />
		
    </section>
  );
}

export default AnimationProject;
