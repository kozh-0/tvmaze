import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";


export default function App() {



	return (
    	<Router>
			<Header/>
				<main className="container content">
					<Switch>
						<Route path='/' component={Main}/>
					</Switch>
				</main>
			<Footer/>
    	</Router>
  	);
}
