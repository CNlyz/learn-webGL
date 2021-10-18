/**
 * @param {string} source
 */
module.exports = source => {
    let str = "const glsl = `" + source + "`;\n export default glsl";
    return str;
}