import React from 'react'

function Home() {
    return (
        <div className="home">
            <div id="unity-container" class="unity-desktop">
                <canvas id="unity-canvas"></canvas>
                <div id="unity-loading-bar">
                    <div id="unity-logo"></div>
                    <div id="unity-progress-bar-empty">
                        <div id="unity-progress-bar-full"></div>
                    </div>
                </div>
                <div id="unity-footer">
                    <div id="unity-webgl-logo"></div>
                    <div id="unity-fullscreen-button"></div>
                    <div id="unity-build-title">BoomAway</div>
                </div>
            </div>
        </div>
    )
}

export default Home