import "./Navbar.css";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<Link className="navbar-brand" to="#">
					<b>
						<GiNotebook />
						ToDo
					</b>
				</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<li className="nav-item mx-2">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link className="nav-link" to="/about">
								About us
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link className="nav-link" to="/todo">
								ToDo
							</Link>
						</li>
						{!isLoggedIn && (
							<>
								<li className="nav-item mx-2 btn-nav ">
									<Link className="nav-link text-light" to="/signup">
										Sign up
									</Link>
								</li>
								<li className="nav-item mx-2 btn-nav">
									<Link
										className="nav-link active text-light"
										aria-current="page"
										to="/signin"
									>
										Sign in
									</Link>
								</li>
							</>
						)}
						{isLoggedIn && (
							<li className="nav-item mx-2 btn-nav">
								<Link
									className="nav-link active text-light"
									aria-current="page"
									to="/logout"
								>
									Log out
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
