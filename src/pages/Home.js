import React from 'react'
import './Pages.css';
import UnityWebPlayer from '../components/UnityWebPlayer';


function Home() {
    return (
        <div className="home">
            <div className="unityWebPlayer">
                <UnityWebPlayer/>
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
                            a
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
