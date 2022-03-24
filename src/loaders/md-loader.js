const {marked} = require('marked');
const fm = require('front-matter');

module.exports = function(source) {
    const content = fm(source);

    const body = marked(content.body);

    const md = {
        attributes: content.attributes,
        bodyRaw: body,
        body: {
            en: body.match(/%start\[en](?<EN>[\S\s]*)%end\[en]/m).groups['EN'],
            de: body.match(/%start\[de](?<DE>[\S\s]*)%end\[de]/m).groups['DE'],
            es: body.match(/%start\[es](?<ES>[\S\s]*)%end\[es]/m).groups['ES'],
            fr: body.match(/%start\[fr](?<FR>[\S\s]*)%end\[fr]/m).groups['FR']
        }
    };

    return `export default ${JSON.stringify(md)};`;
}