const m = require('mithril');
const Component = require('../../core/Component');
const ContactLink = require('./ContactLink');
const SocialLink = require('./SocialLink');

class Footer extends Component {

    view() {
        return m('section#contact', [
            m('.row', [
                m('.contact', [
                    m('ul', [
                        m(ContactLink, {
                            icon: "fa-envelope-o",
                            text: "Email Me",
                            url: "mailto:wesley.rockholz@gmail.com",
                            target: ""
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
                            icon: "fa-facebook-square",
                            url: "https://www.facebook.com/wesley.rockholz"
                        }),
                        m(SocialLink, {
                            icon: "fa-twitter-square",
                            url: "https://twitter.com/wrockholz"
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

module.exports = Footer;
