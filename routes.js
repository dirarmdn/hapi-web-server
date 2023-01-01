const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Welcome to Homepage, madame';
        },
    },
    {
        method: '*', // all method
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET', // route dengan nilai dinamis akan kalah kuatnya dengan nilai spesifik seperti ini
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}', // optional parameter
        handler: (request, h) => {
            const { name = "stranger" } = request.params; // if client doesn't pass any param, name will be show as 'stranger'
            const { lang } = request.query;

            if(lang === 'eng') {
                return `Hello, ${name}!`;
            }

            return `Bonjour, ${name}!`
        },
    },
    {
        method: '*',
        path: '/{any*}', // handle request di path yang belum ditentukan
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];

module.exports = routes;