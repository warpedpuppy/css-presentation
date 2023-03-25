import TabTemplate from '../../../templates/TabTemplate';
import './CautionaryTales.css'

function CautionaryTales() {
	const links = ['transform-box', 'transform order', 'overtax processor']
	return ( <TabTemplate links={links} content={[<h1>transform box https://codepen.io/tedAtCF/pen/gOdqOBJ?editors=0110</h1>, <h1>transform order https://danielcwilson.com/blog/2020/02/motion-path-transforms/</h1>, <h1>overtax processor</h1>]} />);
}

export default CautionaryTales;