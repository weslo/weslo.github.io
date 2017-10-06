const m = require('mithril');
const Component = require('../../core/Component');

class SocialLink extends Component {

    view(vnode) {
        return m('li.social-link', [
            m('a', {
                href: vnode.attrs.url,
                target: "_blank"
            }, [
                m('i', { class: "fa fa-fw fa-2x " + vnode.attrs.icon }),
            ])
        ])
    }
}

module.exports = SocialLink;
