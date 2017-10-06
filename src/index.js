const m = require('mithril');
const Home = require('./components/home/Home');

m.route(document.body, "/", {
    "/": Home,
    "/:project": Home
});
