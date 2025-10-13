import m from "mithril";
import Component from "../../core/Component";

export default class ContactLink extends Component {

    oninit(vnode) {
        vnode.state.copied = false;
    }

    view(vnode) {

        const handleClick = e => {
            if (vnode.attrs.copy) {
                e.preventDefault();
                navigator.clipboard.writeText(vnode.attrs.copy).then(() => {
                    vnode.state.copied = true;
                    m.redraw();
                    setTimeout(() => {
                        vnode.state.copied = false;
                        m.redraw();
                    }, 1500)
                });
            }
        };

        return m('li.contact-link', { class: vnode.state.copied ? "copied" : null }, [
            m('a', {
                href: vnode.attrs.url,
                target: "target" in vnode.attrs ? vnode.attrs.target : "_blank",
                onclick: handleClick,
            }, [
                m('i', { class: "fa fa-fw fa-2x " + vnode.attrs.icon }),
                m('h3', vnode.attrs.text)
            ]),
            vnode.state.copied && m(".tooltip", [
                m('i', { class: "fa fa-clipboard" }),
                "Copied!",
            ])
        ])
    }
}
