import './AnimationProject.css';
import IntroAnimation from './intro/IntroAnimation';
import TabTemplate from '../../../templates/TabTemplate';
import AnimationCodepens from './codepens/AnimationCodepens';
function AnimationProject() {
	const links = ['animations!', 'codepens']
	const content = [<IntroAnimation />, <AnimationCodepens />]
  return (
    <section id="animation-project">


	  <TabTemplate links={links} content={content} />
		
    </section>
  );
}

export default AnimationProject;
