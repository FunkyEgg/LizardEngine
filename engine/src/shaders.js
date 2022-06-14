import { shaderObject } from './constants/shader.js';

/**
 * The base shader class
 */
export class ShaderProgram {
    constructor(shaderCode, shaderType) {
        
    }
}

/**
 * The object for a shader
 * @param {'vertex' | 'fragment'} shaderType The type of the shader
 * @param {String} shaderCode The code for the shader
 */
export class ShaderObject {
    /**
     * The object for a shader
     * @param {'vertex' | 'fragment'} shaderType The type of the shader
     * @param {String} shaderCode The code for the shader
     */
    constructor(shaderType, shaderCode) {
        this.shaderName = shaderName;
        this.shaderType = shaderType;
        this.shaderCode = shaderCode;
    }
}