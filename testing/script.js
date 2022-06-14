import * as lizard from '../engine/mod.js';

const sceneWidth = window.innerWidth;
const sceneHeight = window.innerHeight;

const scene = new lizard.Scene(sceneWidth, sceneHeight, 1);
scene.onLoad((gl) => {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
});
const gl = scene.ctx;

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
const shaderProgram = new lizard.ShaderProgram(shaderArray, gl);

const programInfo = {
    program: shaderProgram,
    attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
};