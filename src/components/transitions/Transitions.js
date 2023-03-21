import { Routes, Route } from 'react-router-dom';
import FadeIns from './fade-ins/FadeIns';
import SlideIns from './slide-ins/SlideIns';
import TransitionSyntax from './syntax/TransitionSyntax';
import PageTemplate from '../../templates/PageTemplate';
import TransitionIntro from './intro/TransitionIntro';
function Transitions() {

	const links = ['transition-syntax']
	return ( 
		<>
			<Routes>
				<Route path="/" element={ <PageTemplate title="transitions" root='/transitions/' links={links} /> } >
					<Route path='/' element={ <TransitionIntro /> }/>
					<Route path='fade-ins/*' element={ <FadeIns /> }/>
					<Route path='slide-ins/*' element={ <SlideIns /> }/>
					<Route path='transition-syntax/*' element={ <TransitionSyntax /> }/>
				</Route>
			</Routes>
		</>
	
	 );
}

export default Transitions;