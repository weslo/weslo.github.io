import m from "mithril";
import Component from "../../core/Component";
import NavLink from "./NavLink";

export default class Nav extends Component {

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
                            title: "About",
                            id: "#about"
                        }),
                        m(NavLink, {
                            title: "Games",
                            id: "#games"
                        }),
                        m(NavLink, {
                            title: "Contact",
                            id: "#contact"
                        })
                    ])
                ])
            ]),
        ]);
    }
}
