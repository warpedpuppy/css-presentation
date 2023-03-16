import { Routes, Route } from 'react-router-dom';
import FadeIns from './fade-ins/FadeIns';
import SlideIns from './slide-ins/SlideIns';
import TransitionSyntax from './syntax/TransitionSyntax';
import PageTemplate from '../../templates/PageTemplate';
function Transitions() {

	const links = ['transition-syntax', 'fade-ins', 'slide-ins']
	return ( 
		<>
			<Routes>
				<Route path="/" element={ <PageTemplate title="transitions" root='/transitions/' links={links} /> } >
					<Route path='/' element={ <h1>spectacular transition example here</h1> }/>
					<Route path='fade-ins/*' element={ <FadeIns /> }/>
					<Route path='slide-ins/*' element={ <SlideIns /> }/>
					<Route path='transition-syntax/*' element={ <TransitionSyntax /> }/>
				</Route>
			</Routes>
		</>
	
	 );
}

export default Transitions;