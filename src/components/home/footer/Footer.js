const m = require('mithril');
const Component = require('../../core/Component');
const ContactLink = require('./ContactLink');
const SocialLink = require('./SocialLink');

class Footer extends Component {

    view() {
        return m('section.footer', [
            m('.row', [
                m('.contact', [
                    m('ul', [
                        m(ContactLink, {
                            icon: "fa-envelope-o",
                            text: "Email Me"
                        }),
                        m(ContactLink, {
                            icon: "fa-file-pdf-o",
                            text: "Resume"
                        })
                    ])
                ]),
                m('.social', [
                    m('ul', [
                        m(SocialLink, {
                            icon: "fa-linkedin-square"
                        }),
                        m(SocialLink, {
                            icon: "fa-facebook-square"
                        }),
                        m(SocialLink, {
                            icon: "fa-twitter-square"
                        }),
                        m(SocialLink, {
                            icon: "fa-github-square"
                        })
                    ])
                ])
            ])
        ]);
    }
}

module.exports = Footer;
