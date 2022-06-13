import { Root } from './root';

/**
 * The root for your entire scene
 */
export class Scene extends Root {
    /**
     * The root for the entire scene
     * @param {number} width The width for the canvas
     * @param {number} height The height for the canvas
     */
    constructor(width, height) {
        let rootDiv = document.createElement('div').className('root');
        document.body.appendChild(rootDiv);
        
        this.m_width = width;
        this.m_height = height;
        this.m_rootDiv = rootDiv;
    }
}