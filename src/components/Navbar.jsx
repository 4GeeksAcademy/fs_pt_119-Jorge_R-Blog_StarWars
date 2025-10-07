import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							className="logo img-fluid"
							src="https://www.freepnglogos.com/uploads/star-wars-logo-1.png"
						/>

					</span>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-primary dropdown-toggle position-relative"
							data-bs-toggle="dropdown">
							Favoritos
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								+99
								<span className="visually-hidden">unread messages</span>
							</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							<li className="d-flex justify-content-between align-items-center px-3">
								<Link className="dropdown-item" to="/demo">Menu item 1 </Link>
								<i className="fa-solid fa-trash" type="button"></i></li>
							<li><Link className="dropdown-item" to="/demo">Menu item 2</Link></li>
							<li><Link className="dropdown-item" to="/demo">Menu item 3</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};