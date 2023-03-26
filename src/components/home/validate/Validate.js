import './Validate.css';
import TabTemplate from '../../../templates/TabTemplate';

function StylelintVideo() {
	return (<div style={{position: "relative", paddingBottom: "56.25%", height: "0"}}><iframe title='stylelint video' src="https://www.loom.com/embed/10cf464c06f548ed9fd37f9ac0e965fa" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe></div>)
}

function Stylelint() {
	return (
	<div className='validate-text'>
		<p>VS Code will come with a built-in css validator, but you can also install stylelint if you'd like:</p>
		<a className="big-button"href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noreferrer">stylelint extension</a>
		<p>If your stylelint is not working, go to the stylelint site itself and follow the "getting started" instructions:</p>
		<a className="big-button"href="https://stylelint.io/user-guide/get-started" target="_blank" rel="noreferrer">stylelint's getting started.</a>
		<p class="aside">Heads up, you may need to have installed <a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">node</a> first.</p>
	</div>
	)
}
function Validate() {
	return ( 
		<section id="validate">
			 <h4>Validate CSS!</h4>
			<TabTemplate links={['video showing validation', 'link to validator']} content={[<StylelintVideo />, <Stylelint />]}/>
       
      </section>
	 );
}

export default Validate;