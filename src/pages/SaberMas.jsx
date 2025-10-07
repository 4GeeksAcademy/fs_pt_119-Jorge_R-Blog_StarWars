
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const SaberMas = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="card mb-3 m-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/1.jpg" className="img-fluid rounded-start" alt="StarWars"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};