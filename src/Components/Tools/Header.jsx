import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { inputReset } from "../../Redux/actions";

export default function Header() {

	const dispatch = useDispatch()


  	return (
      	<nav className="#43a047 green darken-1">
      		<div className="nav-wrapper">
       			<Link 
				   to="/" 
				   className="brand-logo"
				   onClick={() => dispatch(inputReset())}
				   >Tv Maze</Link>
      		</div>
    	</nav>
  	)
}