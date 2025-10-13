import m from "mithril";
import Component from "../../core/Component";
import ContactLink from "./ContactLink";
import SocialLink from './SocialLink';

export default class Footer extends Component {

    view() {
        return m('section#contact', [
            m('.row', [
                m('.contact', [
                    m('ul', [
                        m(ContactLink, {
                            icon: "fa-envelope-o",
                            text: "wesley.rockholz@gmail.com",
                            copy: "wesley.rockholz@gmail.com",
                        }),
                        m(ContactLink, {
                            icon: "fa-file-pdf-o",
                            text: "Resume",
                            url: "resume.pdf"
                        })
                    ])
                ]),
                m('.social', [
                    m('ul', [
                        m(SocialLink, {
                            icon: "fa-linkedin-square",
                            url: "https://www.linkedin.com/in/wrockholz/"
                        }),
                        m(SocialLink, {
                            icon: "fa-github-square",
                            url: "https://github.com/Weslo/"
                        })
                    ])
                ])
            ])
        ]);
    }
}
