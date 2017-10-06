const m = require('mithril');
const Component = require('../core/Component');

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
                        m('li', "Games"),
                        m('li', "Contact")
                    ])
                ])
            ])
        ]);
    }
}

module.exports = Nav;
