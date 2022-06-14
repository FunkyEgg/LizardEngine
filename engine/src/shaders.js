/**
 * The shader program
 * @param {ShaderObject[]} shaders The array of shader (a vert and frag shader are required)
 * @param {RenderingContext} ctx The rendering context
 */
export class ShaderProgram {
    /**
     * The shader program
     * @param {ShaderObject[]} shaders The array of shader (a vert and frag shader are required)
     * @param {RenderingContext} ctx The rendering context
     */
    constructor(shaders, ctx) {
        if (!ctx) throw new Error('No ctx context provided');
        if (shaders.length < 2) throw new Error('At least 2 shaders are required');

        this.ctx = ctx;
        
        console.log(shaders);

        for (let i in shaders) {
            const shader = shaders[i];
            this.#loadShader(shader.code, shader.type);
        }
        

        this.program = ctx.createProgram();
        ctx.attachShader(this.program, this.vertShader);
        ctx.attachShader(this.program, this.fragShader);
        ctx.linkProgram(this.program);

        if (!ctx.getProgramParameter(this.program, ctx.LINK_STATUS))
            throw new Error(`Unable to initialize the shader program: ${ctx.getProgramInfoLog(this.program)}`);
    }

    #loadShader(shaderCode, shaderType) {
        if (!shaderCode) throw new Error('No shader code provided');
        if (!shaderType) throw new Error('No shader type provided');

        if (shaderType === 'vertex') {
            const shader = this.ctx.createShader(this.ctx.VERTEX_SHADER);
            this.ctx.shaderSource(shader, shaderCode);
            this.ctx.compileShader(shader);

            this.vertShader = shader;

            if (!this.ctx.getShaderParameter(shader, this.ctx.COMPILE_STATUS))
                throw new Error(`An error occurred compiling the shaders: ${ctx.getShaderInfoLog(shader)}`);
        } else if (shaderType === 'fragment') {
            const shader = this.ctx.createShader(this.ctx.FRAGMENT_SHADER);
            this.ctx.shaderSource(shader, shaderCode);
            this.ctx.compileShader(shader);

            this.fragShader = shader;

            if (!this.ctx.getShaderParameter(shader, this.ctx.COMPILE_STATUS))
                throw new Error(`An error occurred compiling the shaders: ${ctx.getShaderInfoLog(shader)}`);
        } else throw new Error(`${shaderType} is not a valid shader type`);
    }
}

/**
 * The object for a shader
 * @param {'vertex' | 'fragment'} type The type of the shader
 * @param {String} code The code for the shader
 */
export class ShaderObject {
    /**
     * The object for a shader
     * @param {'vertex' | 'fragment'} type The type of the shader
     * @param {String} code The code for the shader
     */
    constructor(type, code) {
        this.type = type;
        this.code = code;
    }
}