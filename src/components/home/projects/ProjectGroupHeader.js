import m from "mithril";
import Component from "../../core/Component";

export default class ProjectGroupHeader extends Component {

    view(vnode) {
        return m('.project-group-header', [
            m('span', [
                m('img.circle', { src: vnode.attrs.image }),
                m('h4', vnode.attrs.title)
            ])
        ])
    }
}
