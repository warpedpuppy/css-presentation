import './AnimationSyntax.css';
function AnimationSyntax() {
	return ( 
		<section id='animation-syntax'>
			<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation" target="_blank" rel="noreferrer">mdn</a>
		<p>properties</p>
		<ol>
			<li>animation-name</li>
			<li>animation-direction</li>
			<li>animation-fill-mode</li>
			<li>animation-delay</li>
			<li>animation-iteration-count</li>
			<li>animation-play-state</li>
			<li>animation-timing-function</li>
			<li>animation-duration</li>
		</ol>
		<p>short hand: </p>
		<ul>
			<li>duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name</li>
			<li>3s linear 1s slidein</li>
			<li>mutltiple properties: chain with commas</li>
		</ul>
		</section>
	 );
}

export default AnimationSyntax;