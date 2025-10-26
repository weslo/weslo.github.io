import m from "mithril";
import Component from "../core/Component.js";

import portraitUrl from "../../../assets/imgs/portrait.jpg"

export default class About extends Component {

    view() {
        return m('section#about', [
            m('.row', [
                m('h2', "About Me"),
                m('.col-3.col-tablet-1.portrait', [
                    m('img', { src: portraitUrl, 
                        onclick: function() {
                            m.route.set("/about-me")
                        }})
                ]),
                m('.col-3-2.about-text', [
                    m('.about-header', [
                        m('h3', "Hi, I'm Weslo.")
                    ]),
                    m('p', [
                        "I'm a ",
                        m('span.highlight', "generalist game designer and developer"),
                        " in Southern California. I currently work for Secret Door, a Dreamhaven studio building innovative social games. While I'm not actively seeking full-time work, I'm always open to new opportunities.",
                    ]),
                    m('p', "Please hit me up if you're looking for someone with:"),
                    m('ul', [
                        m('li', [
                            m('span.highlight', "10+ years of industry experience"),
                            " in game and UI/UX design, full-stack engineering, and leadership",
                        ]),
                        m('li', [
                            m('span.highlight', "10+ shipped commercial products"),
                            " across the industry, from mobile to kids' games to AAA to indie",
                        ]),
                        m('li', [
                            m('span.highlight', "A rebellious spirit"),
                            " and a passion for small teams, rapid iteration cycles, and keeping costs low"
                        ])
                    ]),
                ])
            ])
        ]);
    }
}
