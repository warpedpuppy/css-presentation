import PageTemplate from '../../templates/PageTemplate';
import { Routes, Route } from 'react-router-dom';
import AnimationProject from './animation-project/AnimationProject';
import AnimationSyntax from './syntax/AnimationSyntax';
function Animations() {
	const links = ['animation-project', 'animation-syntax']
	return ( 
	<Routes>
		<Route path="/" element={ <PageTemplate title="animations" root='/animations/animation-project' links={links} /> } >
			<Route path='/animation-project' element={ <AnimationProject /> }/>
			<Route path='animation-syntax/*' element={ <AnimationSyntax /> }/>
			{/* <Route path='examples/*' element={ <Fun /> }/> */}
		</Route>
	</Routes> );
}

export default Animations;