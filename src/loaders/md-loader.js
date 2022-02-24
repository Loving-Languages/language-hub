const {marked} = require('marked');
const fm = require('front-matter');

module.exports = function(source) {
    const content = fm(source);

    const md = {
        attributes: content.attributes,
        body: marked(content.body)
    };

    return `export default ${JSON.stringify(md)};`;
}