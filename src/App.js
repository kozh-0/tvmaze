import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
						<Route path='/onefilm/:name' component={OneFilm}/>
						<NotFound/>
					</Switch>
				</main>
			<Footer/>
    	</Router>
  	);
}
