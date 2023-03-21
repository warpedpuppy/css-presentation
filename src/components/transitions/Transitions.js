import { Routes, Route } from 'react-router-dom';
import TransitionSyntax from './syntax/TransitionSyntax';
import PageTemplate from '../../templates/PageTemplate';
import TransitionIntro from './intro/TransitionIntro';

function Transitions() {

	const links = ['transition-project', 'transition-syntax']
	return ( 
		<>
			<Routes>
				<Route path="/" element={ <PageTemplate title="transitions" root='/transitions/transition-project' links={links} /> } >
					<Route path='transition-project/*' element={ <TransitionIntro /> }/>
					<Route path='transition-syntax/*' element={ <TransitionSyntax /> }/>
				</Route>
			</Routes>
		</>
	
	 );
}

export default Transitions;