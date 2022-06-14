import { Root } from './root.js';

/**
 * The root rectanctxe class
 * @param {Number} sizeX The size on the x axsis
 * @param {Number} sizeY The size on the y axsis
 * @returns {ArrayBuffer} The position buffer
 */
export class Rect extends Root {
    /**
     * The root rectanctxe class
     * @param {Number} sizeX The size on the x axsis
     * @param {Number} sizeY The size on the y axsis
     * @param {RenderingContext} renderingContext The scenes rendering context
     * @returns {ArrayBuffer} The position buffer
     */
    constructor(sizeX, sizeY, renderingContext) {
        if (!sizeX) throw new Error('No sizeX provided');
        if (!sizeY) throw new Error('No sizeY provided');
        if (!ctx) throw new Error('No rendering context provided');

        const positionBuffer = ctx.createBuffer();
        ctx.bindBuffer()

        const pos = [
            sizeX, sizeY,
            -sizeX, sizeY,
            sizeX, -sizeY,
            -sizeX, -sizeY
        ]
    }
}