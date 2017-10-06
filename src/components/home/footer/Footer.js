const m = require('mithril');
const Component = require('../../core/Component');
const ContactLink = require('./ContactLink');

class Footer extends Component {

    view() {
        return m('.footer', [
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
                    ])
                ])
            ])
        ]);
    }
}

module.exports = Footer;
