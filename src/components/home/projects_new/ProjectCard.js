import m from "mithril";
import Component from "../../core/Component";

export default class ProjectGroup extends Component {

    view(vnode) {
        return m('.project-card', {
            style: "background-image: url(" + vnode.attrs.image + ")",
            onclick: function() {
                m.route.set("/" + vnode.attrs.id)
            }
        }, [
            m('.project-card-banner', [
                m('.role', vnode.attrs.role),
                m('.duration', vnode.attrs.duration)
            ])
        ]);
    }
}
