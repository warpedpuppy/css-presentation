import './AnimationProject.css';
import IntroAnimation from './intro/IntroAnimation';
import TabTemplate from '../../../templates/TabTemplate';
import AnimationCodepens from './codepens/AnimationCodepens';
function AnimationProject() {
	const links = ['animations!', 'codepens']
	const content = [<IntroAnimation />, <AnimationCodepens />]
  return (
    <section id="animation-project">

      <h4>Let's learn how animations work!</h4>
	  <TabTemplate links={links} content={content} />
		
    </section>
  );
}

export default AnimationProject;
