/**
 * The root for your entire scene
 */
export class Scene {
    /**
     * The root for the entire scene
     * @param {number} width The width for the canvas
     * @param {number} height The height for the canvas
     * @param {number} webglVer The version for webgl (1 or 2)
     */
    constructor(width, height, webglVer) {
        if (!height) throw new Error('No height provided');
        if (!width) throw new Error('No width provided');
        if (!webglVer) throw new Error('No webgl version provided');
        if (webglVer !== 1 && webglVer !== 2) throw new Error('Invalid webgl version');

        let rootDiv = document.createElement('div');
        rootDiv.className = 'root';
        rootDiv.id = 'root_div';
        document.body.appendChild(rootDiv);

        let canvas = document.createElement('canvas');
        canvas.className = 'canvas';
        canvas.id = 'root_canvas';
        canvas.width = width;
        canvas.height = height;
        document.getElementById(rootDiv.id).appendChild(canvas);

        this.m_width = width;
        this.m_height = height;
        this.m_rootDiv = rootDiv;
        this.m_canvas = canvas;
        this.m_webglVer = webglVer;
    }

    /**
     * Defines the scene onload method
     * @param {Function} onLoadFunction The function to call once the program has loaded
     */
    onLoad(onLoadFunction) {
        if (!onLoadFunction) throw new Error('No onload function provided');

        window.onload = this.#onLoad(onLoadFunction)
    };

    #onLoad(onLoadFunction) {
        let gl = this.m_canvas.getContext(this.m_webglVer === 2 ? 'webgl2' : 'webgl');

        if (gl === null) {
            alert('Unable to initialize WebGL. Your browser or machine may not support it.');
            return;
        } else console.log('WebGL initialized');

        onLoadFunction(gl);
    }
}