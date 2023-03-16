import PageTemplate from '../../templates/PageTemplate';
import { Routes, Route } from 'react-router-dom';
import Celebration from './celebration/Celebration';
import DataVisualization from './data-visualization/DataVisualization';
import Fun from './fun/Fun';
import IntroAnimation from './intro/IntroAnimation';
function Animations() {
	const links = ['celebration', 'data-visualization', 'fun']
	return ( 
	<Routes>
		<Route path="/" element={ <PageTemplate title="animations" root='/animations' links={links} /> } >
			<Route path='/' element={ <IntroAnimation /> }/>
			<Route path='celebration/*' element={ <Celebration /> }/>
			<Route path='data-visualization/*' element={ <DataVisualization /> }/>
			<Route path='fun/*' element={ <Fun /> }/>
		</Route>
	</Routes> );
}

export default Animations;