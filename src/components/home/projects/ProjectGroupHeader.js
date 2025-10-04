import m from "mithril";
import Component from "../../core/Component";

export default class ProjectGroupHeader extends Component {

    view(vnode) {
        return m('.project-group-header', [
            m('img.circle', { src: vnode.attrs.image }),
            m('div', [
                m('h4', vnode.attrs.title),
                m('h5', vnode.attrs.subtitle),
            ])
        ])
    }
}
