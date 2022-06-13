import * as lizard from '../engine/mod.js';

let scene = new lizard.Scene(500, 300, 2);

scene.onLoad((_gl) => {
    let gl = lizard.parseRenderingContext(_gl);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
});