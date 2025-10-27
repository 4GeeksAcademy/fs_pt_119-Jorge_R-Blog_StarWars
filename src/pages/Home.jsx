import { useEffect, useState } from "react";
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
			console.error(error);
		}
	}

	useEffect(() => {
		obtenerListas();
	}, []);

	const like = (item) => {
		dispatch({
			type: 'set_favoritos',
			payload: item
		});
	};

	return (
		<>
			<div className="container">
				<h1>Personajes</h1>
				<div className="d-flex flex-nowrap overflow-auto">
					{store.listas.people.map((itemPeople) => (
						<div
							className="contenedor card me-3"
							key={itemPeople.uid}
						>
							<img
								src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${itemPeople.uid}.jpg`}
								className="card-img-top"
								alt="..."
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">{itemPeople.name}</h5>
								<p className="card-text">Género:</p>
								<p className="card-text">Color de cabello:</p>
								<p className="card-text">Color de ojos:</p>
								<div className="d-flex justify-content-between align-items-center">
									<Link className="dropdown-item" to={`/sabermas/people/${itemPeople.uid}`}>
										<button type="button" className="btn btn-outline-primary">Saber mas...</button>
									</Link>
									<button
										type="button"
										className={`btn btn-outline-warning btn-sm ${store.favoritos.some(fav => fav.uid === itemPeople.uid && fav.tipo === 'people') ? 'active' : ''
											}`}
										onClick={() => like({ ...itemPeople, tipo: 'people' })}
									>
										<i className="fa-regular fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="container">
				<h1>Planetas</h1>
				<div className="d-flex flex-nowrap overflow-auto">
					{store.listas.planets.map((itemPlanets) => (
						<div
							className="contenedor card me-3"
							key={itemPlanets.uid}
						>
							<img
								src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${itemPlanets.uid}.jpg`}
								className="card-img-top"
								alt="..."
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">{itemPlanets.name}</h5>
								<p className="card-text">Tamaño:</p>
								<p className="card-text">Poblacion:</p>
								<div className="d-flex justify-content-between align-items-center">
									<Link className="dropdown-item" to={`/sabermas/planets/${itemPlanets.uid}`}>
										<button type="button" className="btn btn-outline-primary">Saber mas...</button>
									</Link>
									<button
										type="button"
										className={`btn btn-outline-warning btn-sm ${store.favoritos.some(fav => fav.uid === itemPlanets.uid && fav.tipo === 'planets') ? 'active' : ''
											}`}
										onClick={() => like({ ...itemPlanets, tipo: 'planets' })}
									>
										<i className="fa-regular fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="container">
				<h1>Naves</h1>
				<div className="d-flex flex-nowrap overflow-auto">
					{store.listas.starships.map((itemStarships) => (
						<div
							className="contenedor card me-3"
							key={itemStarships.uid}
						>
							<img
								src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${itemStarships.uid}.jpg`}
								className="card-img-top"
								alt="..."
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">{itemStarships.name}</h5>
								<p className="card-text">Modelo:</p>
								<p className="card-text">Clase:</p>
								<div className="d-flex justify-content-between align-items-center">
									<Link className="dropdown-item" to={`/sabermas/starships/${itemStarships.uid}`}>
										<button type="button" className="btn btn-outline-primary">Saber mas...</button>
									</Link>
									<button
										type="button"
										className={`btn btn-outline-warning btn-sm ${store.favoritos.some(fav => fav.uid === itemStarships.uid && fav.tipo === 'starships') ? 'active' : ''
											}`}
										onClick={() => like({ ...itemStarships, tipo: 'starships' })}
									>
										<i className="fa-regular fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}; 