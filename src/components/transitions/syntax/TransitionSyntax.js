import './TransitionSyntax.css';
function TransitionSyntax() {
	return ( 
		<section id='transition-syntax'>
			<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition" target="_blank" rel="noreferrer">mdn</a>
		<p>properties</p>
		<ul>
			<li>trasition-property</li>
			<li>trasition-duration</li>
			<li>trasition-timing-function</li>
			<li>trasition-delay</li>
		</ul>
		<p>short hand: </p>
		<ul>
			<li>2 property -- name duration</li>
			<li>3 -- name duration delay|easingfunction</li>
			<li>4 -- name duration easing delay</li>
			<li>mutltiple properties: chain with commas</li>
			<li>all</li>
		</ul>
		</section>
	 );
}

export default TransitionSyntax;