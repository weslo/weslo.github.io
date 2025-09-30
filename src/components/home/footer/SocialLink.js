import m from "mithril";
import Component from "../../core/Component";

export default class SocialLink extends Component {

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
