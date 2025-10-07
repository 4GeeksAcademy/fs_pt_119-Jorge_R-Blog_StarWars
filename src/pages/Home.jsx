import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="container">
			<h1>Personajes</h1>
			<div className="d-flex flex-nowrap overflow-auto">
				<div className="contenedor card me-3">
					<img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/1.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text...</p>
						<div className="d-flex justify-content-between align-items-center">
							<Link className="dropdown-item" to="/sabermas">
							<button type="button" className="btn btn-outline-primary">Saber mas...</button>
							</Link>
							<button type="button" className="btn btn-outline-warning btn-sm">
								<i className="fa-regular fa-heart btn"></i>
							</button>
						</div>
					</div>
				</div>

				<div className="contenedor card me-3">
					<img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/8.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text...</p>
						<button type="button" className="btn btn-primary">Saber mas...</button>
					</div>
				</div>

				<div className="contenedor card me-3">
					<img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/9.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text...</p>
						<button type="button" className="btn btn-primary">Saber mas...</button>
					</div>
				</div>

				<div className="contenedor card me-3">
					<img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/2.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text...</p>
						<button type="button" className="btn btn-primary">Saber mas...</button>
					</div>
				</div>

				<div className="contenedor card me-3">
					<img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/10.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text...</p>
						<button type="button" className="btn btn-primary">Saber mas...</button>
					</div>
				</div>
			</div>
		</div>
	);
}; 