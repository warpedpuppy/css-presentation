import './TransitionIntro.css';

function TransitionIntro() {
	return ( 
	<div>
		<h2>Let's build this together!</h2>
	<div id="transition-example-project">
	<nav>
	  <h1>brand</h1>
	  <input type="checkbox" />
	  <div className="hamburger">
		<span></span>
		<span></span>
		<span></span>
	  </div>
	  <ul>
		<li>
		  <button>menu item 1</button>
		</li>
		<li>
		  <button>menu item 2</button>
		</li>
		<li>
		  <button>menu item 3</button>
		</li>
		<li>
		  <button>menu item 4</button>
		</li>
	  </ul>
	</nav>
	<main>
	  <aside>
		<ul>
		  <li>
			<button>
			  <span></span>sidebar item 1
			</button>
		  </li>
		  <li>
			<button>
			  <span></span>sidebar item 2
			</button>
		  </li>
		</ul>
	  </aside>
	  <div>
		  <button>hover over and click me</button>
	  </div>
	</main>
	</div> </div>);
}

export default TransitionIntro;