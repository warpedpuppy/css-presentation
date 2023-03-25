import PageTemplate from '../../templates/PageTemplate';
import { Routes, Route } from 'react-router-dom';
import AnimationProject from './animation-project/AnimationProject';
import AnimationSyntax from './syntax/AnimationSyntax';
import OtherAnimationExamples from './other-animation-examples/OtherAnimationExamples';
import CautionaryTales from './cautionary-tales/CautionaryTales';
function Animations() {
	const links = ['animation-project', 'animation-syntax', 'other-examples', 'cautionary-tales']
	return ( 
	<Routes>
		<Route path="/" element={ <PageTemplate title="animations" root='/animations/animation-project' links={links} /> } >
			<Route path='/animation-project' element={ <AnimationProject /> }/>
			<Route path='animation-syntax/*' element={ <AnimationSyntax /> }/>
			<Route path='/other-examples/*' element={ <OtherAnimationExamples /> }/>
			<Route path='/cautionary-tales/*' element={ <CautionaryTales /> }/>
		</Route>
	</Routes> );
}

export default Animations;