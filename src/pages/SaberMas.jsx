
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const SaberMas = () => {

	const { store, dispatch } = useGlobalReducer()
	const { tipo, uid } = useParams();

	async function saberMas() {
		try {
			dispatch({
				type: "set_saberMas",
				payload: {
					data: null
				}
			});

			const resp = await fetch(`https://www.swapi.tech/api/${tipo}/${uid}`);
			if (!resp.ok) throw new Error("Elemento no encontrado");

			const data = await resp.json();

			dispatch({
				type: "set_saberMas",
				payload: {
					data: data.result.properties
				}
			});

		} catch (error) {
			console.error("Error al conectar con la Fuerza", error);
		}
	}

	useEffect(() => {
		saberMas();
	}, [uid, tipo]);

	const detalles = store.saberMas.data;

	const nombreImagen = {
		people: "characters",
		starships: "starships",
		planets: "planets"
	};
	const tipoImagen = nombreImagen[tipo]

	if (!detalles) return <p className="m-4">Cargando detalles...</p>;

	return (

		<div className="card mb-3 m-3" >
			<div className="row g-0">
				<div className="col-md-4">
					<img
						src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${tipoImagen}/${uid}.jpg`}
						className="img-fluid rounded-start"
						alt={detalles.name || detalles.model}
						onError={(e) => {
							e.target.onerror = null;
							e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
						}}
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{detalles.name}</h5>
						<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam rerum a, dolorem et fugiat obcaecati ad beatae provident cum labore numquam architecto minima blanditiis impedit aut, quod voluptas? Facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse assumenda eum, odio odit optio quisquam saepe recusandae inventore tempora praesentium ipsa cum facilis consequuntur, maxime accusamus possimus eos ducimus officia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quas soluta maxime qui nam aliquid eius accusamus! Sunt nisi, asperiores saepe, labore blanditiis possimus placeat pariatur neque perspiciatis libero quod?</p>
						<p className="card-text"><small className="text-muted">No hay texto descriptivo en la SWAPI, aplico Lorem</small></p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Nombre</h5>
						<p className="card-text">{detalles.name}</p>
					</div>
				</div>
				{tipo === "people" && (
				<>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Fecha de Nacimiento</h5>
						<p className="card-text">{detalles.birth_year}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Género</h5>
						<p className="card-text">{detalles.gender}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Altura</h5>
						<p className="card-text">{detalles.height}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Color de piel</h5>
						<p className="card-text">{detalles.skin_color}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Color de Ojos</h5>
						<p className="card-text">{detalles.eye_color}</p>
					</div>
				</div>
				</>
				 )}
				 {tipo === "planets" && (
				<>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Diametro</h5>
						<p className="card-text">{detalles.diameter}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Clima</h5>
						<p className="card-text">{detalles.climate}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Terreno</h5>
						<p className="card-text">{detalles.terrain}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Población</h5>
						<p className="card-text">{detalles.population}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Gravedad</h5>
						<p className="card-text">{detalles.gravity}</p>
					</div>
				</div>
				</>
				 )}
				 {tipo === "starships" && (
				<>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Pasajeros</h5>
						<p className="card-text">{detalles.passengers}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Tripulación</h5>
						<p className="card-text">{detalles.crew}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Modelo</h5>
						<p className="card-text">{detalles.model}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Clase</h5>
						<p className="card-text">{detalles.starship_class}</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="card-body">
						<h5 className="card-title">Capacidad de carga</h5>
						<p className="card-text">{detalles.cargo_capacity}</p>
					</div>
				</div>
				</>
				 )}
			</div>
		</div >
	)
};