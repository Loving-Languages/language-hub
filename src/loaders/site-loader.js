const {marked} = require('marked');

module.exports = function(source) {
    const settings = JSON.parse(source);

    return `export default ${JSON.stringify(marked.parse(source))};`;
}