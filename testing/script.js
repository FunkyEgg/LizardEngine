import * as lizard from '../engine/mod.js';

let sceneWidth = window.innerWidth;
let sceneHeight = window.innerHeight;

let scene = new lizard.Scene(sceneWidth, sceneHeight, 1);

scene.onLoad((ctx) => {
    ctx.clearColor(1.0, 1.0, 0.0, 1.0);
    ctx.clear(ctx.COLOR_BUFFER_BIT);
});

const vertShader = new lizard.ShaderObject('vertex', `
attribute vec4 aVertexPosition;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
}
`);
const fragShader = new lizard.ShaderObject('fragment', `
void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`);
const shaderArray = [fragShader, vertShader];
const shaderProgram = new lizard.ShaderProgram(shaderArray, scene.getRenderingContext());

//! Errors somehow
const programInfo = {
    program: shaderProgram,
    attribLocations: {
        vertexPosition: scene.getRenderingContext().getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
        projectionMatrix: scene.getRenderingContext().getUniformLocation(shaderProgram, 'uProjectionMatrix'),
        modelViewMatrix: scene.getRenderingContext().getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
};