import * as lizard from '../engine/mod.js';

let sceneWidth = window.innerWidth;
let sceneHeight = window.innerHeight;

let scene = new lizard.Scene(sceneWidth, sceneHeight, 2);

scene.onLoad((_gl) => {
    let gl = lizard.parseRenderingContext(_gl);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
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