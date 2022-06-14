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
     * @param {RenderingContext} ctx The scenes rendering context
     * @returns {ArrayBuffer} The position buffer
     */
    constructor(posX, posY, nPosX, nPosY, ctx) {
        if (!sizeX) throw new Error('No sizeX provided');
        if (!sizeY) throw new Error('No sizeY provided');
        if (!ctx) throw new Error('No rendering context provided');

        this.positionBuffer = ctx.createBuffer();
        ctx.bindBuffer(ctx.ARRAY_BUFFER, this.positionBuffer);

        const pos = [
            posX, posY,
            nPosX, posY,
            posX, nPosY,
            nPosX, nPosY
        ];

        ctx.bufferData(ctx.ARRAY_BUFFER,
            new Float32Array(pos),
            ctx.STATIC_DRAW);
        
        return { position: this.positionBuffer, }
    }
}