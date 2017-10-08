const m = require('mithril');
const Component = require('../../core/Component');

class ContactLink extends Component {

    view(vnode) {
        return m('li.contact-link', [
            m('a', {
                href: vnode.attrs.url,
                target: "target" in vnode.attrs ? vnode.attrs.target : "_blank"
            }, [
                m('i', { class: "fa fa-fw fa-2x " + vnode.attrs.icon }),
                m('h3', vnode.attrs.text)
            ])
        ])
    }
}

module.exports = ContactLink;
