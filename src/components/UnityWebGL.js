import React from 'react'

function UnityWebGL() {
    return (
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
        </div>
        </div>
    )
}

export default UnityWebGL