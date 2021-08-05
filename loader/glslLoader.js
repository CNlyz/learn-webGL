/**
 * @param {string} source
 */
module.exports = source => {
    let str = "const glsl = `" + source + "`;\n export default glsl";
    return str;
}

// 通过 exports.raw 属性告诉 Webpack 该 Loader 是否需要二进制数据 
// module.exports.raw = true;