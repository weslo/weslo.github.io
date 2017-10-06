const m = require('mithril');
const Component = require('../../core/Component');
const NavLink = require('./NavLink');

class Nav extends Component {

    view() {
        return m('.nav', [
            m('.row', [
                m('.logo', [
                    m('h3', "Games by"),
                    m('h1', "Weslo")
                ]),
                m('.nav-links', [
                    m('ul', [
                        m(NavLink, {
                            title: "Games",
                            id: "#games"
                        }),
                        m(NavLink, {
                            title: "About",
                            id: "#about"
                        }),
                        m(NavLink, {
                            title: "Contact",
                            id: "#contact"
                        })
                    ])
                ])
            ])
        ]);
    }
}

module.exports = Nav;
