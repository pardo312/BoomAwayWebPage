import React from 'react'
import './Pages.css';
import UnityWebGL from'../components/UnityWebGL';


function Home() {
    return (
        <div className="home">
            <div className="GameCard">
                <UnityWebGL/>
            </div>
            <div className="contentCard">
                <div className="container" >
                    <h1 className="title">Boom Away</h1>
                    <div className="row" >
                        <div class="col-xl-6">
                            <div className="content" >
                                <br/>
                                <img class="center" style={{maxHeight:"50vh"}} src={'/images/BoomAwayBanner.jpeg'} alt="profileImg"/> 
                            </div>
                        </div>
                        <div class="col-xl-6 col-12">
                            <p className="paragraph">
                            Este es un juego realizado como proyecto de grado de Ingeniería de Sistemas y Computación en la Universidad de los Andes (Bogotá, Colombia),
                            bajo la categoria de juego experimental. La parte experimental es un juego de plataformas 2D donde el protagonista no puede saltar, y el resultado es un 
                            videojuego de puzzle en el cual el personaje tiene control de diferentes explosivos para concatenar acciones que lo lleven a alcanzar el final de los niveles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
