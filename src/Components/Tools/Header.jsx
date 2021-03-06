import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { inputReset, pageValueReset } from "../../Redux/actions";

export default function Header() {

	const dispatch = useDispatch()


  	return (
      	<nav className="header #5e35b1 deep-purple darken-1">
      		<div className="nav-wrapper">
       			<Link 
				   to="/" 
				   className="brand-logo"
				   onClick={() => {
					   dispatch(inputReset)
					   dispatch(pageValueReset)
					}}
				   >Tv Maze</Link>
      		</div>
    	</nav>
  	)
}