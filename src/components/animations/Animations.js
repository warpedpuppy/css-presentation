import PageTemplate from '../../templates/PageTemplate';
import { Routes, Route } from 'react-router-dom';
import Celebration from './celebration/Celebration';
import DataVisualization from './data-visualization/DataVisualization';
import Fun from './fun/Fun';
function Animations() {
	const links = ['celebration', 'data-visualization', 'fun']
	return ( 
	<Routes>
		<Route path="/" element={ <PageTemplate title="animations" root='/animations' links={links} /> } >
			<Route path='/' element={ <h1>animations</h1> }/>
			<Route path='celebration/*' element={ <Celebration /> }/>
			<Route path='data-visualization/*' element={ <DataVisualization /> }/>
			<Route path='fun/*' element={ <Fun /> }/>
		</Route>
	</Routes> );
}

export default Animations;