/**
 * The root for your entire scene
 */
export class Scene {
    /**
     * The root for the entire scene
     * @param {number} width The width for the canvas
     * @param {number} height The height for the canvas
     */
    constructor(width, height) {
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
    }

    /**
     * Defines the scene onload method
     * @param {Function} onLoadFunction The function to call once the program has loaded
     */
    onLoad(onLoadFunction) {
        window.onload = this.#onLoad(onLoadFunction)
    };

    #onLoad(onLoadFunction) {


        onLoadFunction();
    }
}