/**
 * generate id
 * @returns {string} id
 */
module.exports.uid = function uid() {
    return (Math.random() * Date.now()).toString(16).substring(2, 9);
}