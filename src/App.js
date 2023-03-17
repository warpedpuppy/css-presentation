import './App.css';
import './css-generals/syntax-list.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Transitions from './components/transitions/Transitions';
import Animations from './components/animations/Animations';
import Easing from './components/easing/Easing';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import NotFound from './components/notfound/NotFound';
function App() {
  return (
    <BrowserRouter>
            <header><NavBar /></header>
            <main>
				<Routes>
					<Route index element={ <Home /> } />
					<Route path="transitions/*" element={ <Transitions /> } />
					<Route path="animations/*" element={ <Animations /> } />
					<Route path="easing/*" element={ <Easing /> } />
					<Route path="*" element={ <NotFound /> } />
				</Routes>
            </main>
            <footer></footer>
         </BrowserRouter>
  );
}

export default App;
