export default class Engine {
    #gl: WebGL2RenderingContext | null;

    constructor(canvas: HTMLCanvasElement) {
        this.#gl = canvas.getContext('webgl2');
    }
}