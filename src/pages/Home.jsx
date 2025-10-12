import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	async function obtenerListas() {
		try {
			const [respPeople, respStarships, respPlanets] = await Promise.all([
				fetch("https://www.swapi.tech/api/people"),
				fetch("https://www.swapi.tech/api/starships"),
				fetch("https://www.swapi.tech/api/planets"),
			]);

			if (!respPeople.ok || !respStarships.ok || !respPlanets.ok) {
				throw new Error("Error al cargar los datos. Contacte a soporte técnico XD");
			}

			const [dataPeople, dataStarships, dataPlanets] = await Promise.all([
				respPeople.json(),
				respStarships.json(),
				respPlanets.json(),
			]);

			console.log("Personajes:", dataPeople);
			console.log("Naves:", dataStarships);
			console.log("Planetas:", dataPlanets);

			dispatch({
				type: "set_listas",
				payload: {
					people: dataPeople.results,
					starships: dataStarships.results,
					planets: dataPlanets.results,
				},
			});

		} catch (error) {
			console.error("Error al obtener las listas:", error);
		}
	}

	useEffect(() => {
		obtenerListas();
	}, []);
	return (
		
		<div className="container">
			<h1>Personajes</h1>
			<div className="d-flex flex-nowrap overflow-auto">
				{store.listas.people.map((item) => (
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
				))}
			</div>
		</div>	
	);
}; 