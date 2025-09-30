import m from "mithril";
import Component from "../../core/Component";

export default class ProjectBanner extends Component {

    view(vnode) {
        return m('.project', {
            style: "background-image: url(" + vnode.attrs.bannerImage + ")",
            onclick: function() {
                m.route.set("/" + vnode.attrs.id)
            }
        }, [
            m('.overlay', [
                m('.text-container', [
                    m('span', [
                        m('h5', vnode.attrs.title),
                        m('i.fa.fa-info-circle')
                    ]),
                    m('p', vnode.attrs.brief)
                ]),
            ])
        ])
    }
}
