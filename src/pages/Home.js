import React from 'react'
import './Pages.css';


function Home() {
    return (
        <div className="home">
            <div className="contentCard">
                <div className="container" >
                    <h1 className="title">Boom Away</h1>
                    <div className="row" >
                        <div className="col-xl-6">
                            <div className="content" >
                                <br/>
                                <img className="center" style={{maxHeight:"50vh"}} src={'/images/BoomAwayBanner.jpeg'} alt="profileImg"/> 
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12">
                            <p className="paragraph">
                                Este es un juego realizado como proyecto de grado de Ingeniería de Sistemas y Computación en la Universidad de los Andes (Bogotá, Colombia),
                                bajo la categoria de juego experimental. La parte experimental es un juego de plataformas 2D donde el protagonista no puede saltar, y el resultado es un 
                                videojuego de puzzle en el cual el personaje tiene control de diferentes explosivos para concatenar acciones que lo lleven a alcanzar el final de los niveles.
                            <br/>
                            <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GameCard">
                <div className="container" >
                    <div className="row" >
                        <div className="col-xl-12">
                            <a type="button" href="https://boomawayinc.itch.io/boomaway" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg center button" style={{marginTop:"150px"}}>!Realizar encuesta rapida!</a>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-xl-12">
                            <a type="button" href="https://boomawayinc.itch.io/boomaway" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg center button" style={{marginTop:"50px"}}>!Jugar al juego!</a>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
