import PageTemplate from '../../templates/PageTemplate';
import { Routes, Route } from 'react-router-dom';
import AnimationProject from './animation-project/AnimationProject';
import AnimationSyntax from './syntax/AnimationSyntax';
import OtherAnimationExamples from './other-animation-examples/OtherAnimationExamples';
function Animations() {
	const links = ['animation-project', 'animation-syntax', 'other-examples']
	return ( 
	<Routes>
		<Route path="/" element={ <PageTemplate title="animations" root='/animations/animation-project' links={links} /> } >
			<Route path='/animation-project' element={ <AnimationProject /> }/>
			<Route path='animation-syntax/*' element={ <AnimationSyntax /> }/>
			<Route path='/other-examples/*' element={ <OtherAnimationExamples /> }/>
		</Route>
	</Routes> );
}

export default Animations;