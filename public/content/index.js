module.exports = {
    '/': {
        title: 'app.name',
        pages: {},
        children: {
            'english': {
                title: 'lang.english',
                pages: {},
                children: {}
            },
            'german': {
                title: 'lang.german',
                pages: {
                    'beginner-resources': require('./German/Beginner Resources.md').default
                },
                children: {}
            },
            'language': {
                title: 'lang.language',
                pages: {
                    'how-to-learn-a-foreign-language': require('./Language/How to Learn a Foreign Language.md').default,
                    'how-to-learn-your-native-language': require('./Language/How to Learn your Native Language.md').default
                },
                children: {}
            }
        }
    }
};