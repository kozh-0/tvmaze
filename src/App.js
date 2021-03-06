import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "./Components/Tools/Header";
import Footer from "./Components/Tools/Footer";
import Main from "./Components/Main";
import OneFilm from'./pages/OneFilm';
import NotFound from './pages/NotFound'


export default function App() {

	return (
    	<Router basename='/tvmaze'>
			<Header/>
				<main className="container">
					<Switch>
						<Route exact path='/' component={Main}/>
						<Route path='/onefilm/:id/:name' component={OneFilm}/>
						<Route component={NotFound}/>
					</Switch>
				</main>
			<Footer/>
    	</Router>
  	);
}
