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
        super();

        if (!posX) throw new Error('No sizeX provided');
        if (!posY) throw new Error('No sizeY provided');
        if (!nPosX) throw new Error('No nPosX provided');
        if (!nPosY) throw new Error('No nPosY provided');
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