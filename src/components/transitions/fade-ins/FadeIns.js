import { Routes, Route } from 'react-router-dom';
import Buttons from './buttons/Buttons';
import AbsPosDivs from './abs-pos-divs/AbsPosDivs';
import TabTemplate from '../../../templates/TabTemplate';
function FadeIns() {
	const links = ['buttons', 'abs-pos-divs'];
	return (
		<>
			<Routes>
				<Route path="/" element={ <TabTemplate title="transitions" links={links} /> } >
					<Route path='/' element={ <p>fade ins</p> }/>	
					<Route path='buttons' element={ <Buttons /> }/>
					<Route path='abs-pos-divs' element={ <AbsPosDivs /> }/>
				</Route>
			</Routes>
		</>
	 );
}

export default FadeIns;