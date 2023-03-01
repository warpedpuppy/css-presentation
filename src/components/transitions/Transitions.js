import { Routes, Route } from 'react-router-dom';
import FadeIns from './fade-ins/FadeIns';
import SlideIns from './slide-ins/SlideIns';
import PageTemplate from '../../templates/PageTemplate';
function Transitions() {
	return ( 
		<>
			<Routes>
				<Route path="/" element={ <PageTemplate title="transitions" root='/transitions/' links={['fade-ins', 'slide-ins']} /> } >
					<Route path='/' element={ <h1>transitions</h1> }/>
					<Route path='fade-ins/*' element={ <FadeIns /> }/>
					<Route path='slide-ins/*' element={ <SlideIns /> }/>
				</Route>
			</Routes>
		</>
	
	 );
}

export default Transitions;