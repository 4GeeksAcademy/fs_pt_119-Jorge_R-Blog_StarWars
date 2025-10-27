import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	const dislike = (item) => {
		dispatch({
			type: 'set_favoritos',
			payload: item
		});
	};

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
								{store.favoritos.length}
								<span className="visually-hidden">unread messages</span>
							</span>
						</button>
						<ul className="dropdown-menu">
							{store.favoritos.length === 0 ? (
								<li className="px-2 text-muted">Vacío</li>
							) : (
								store.favoritos.map(fav => (
									<li key={fav.uid} className="d-flex justify-content-between align-items-center px-2">
										{fav.name}
										<button
											className="btn btn-sm btn-outline-secondary"
											onClick={() => dislike(fav)}
										>
											<i className="fa-solid fa-trash"></i>
										</button>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};