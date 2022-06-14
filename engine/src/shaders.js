/**
 * The shader program
 * @param {shaderObject[]} shaders The array of shader (a vert and frag shader are required)
 * @param {RenderingContext} gl The rendering context
 */
export class ShaderProgram {
    /**
     * The shader program
     * @param {ShaderObject[]} shaders The array of shader (a vert and frag shader are required)
     * @param {RenderingContext} gl The rendering context
     */
    constructor(shaders, gl) {
        if (!gl) throw new Error('No WebGL context provided');
        
        for (let shader of shaders) {
            // TODO
            
        }
        
        this.m_gl = gl;
    }

    #loadShader() {

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