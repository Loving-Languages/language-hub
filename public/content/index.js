module.exports = {
    title: 'app.name',
    pages: [],
    children: [
        {
            title: 'lang.english',
            pages: [],
            children: []
        },
        {
            title: 'lang.german',
            pages: [
                require('./German/Beginner Resources.md').default
            ],
            children: []
        }
    ]
};