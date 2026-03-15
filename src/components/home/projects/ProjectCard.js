import m from "mithril";
import Component from "../../core/Component";

export default class ProjectGroup extends Component {

    view(vnode) {
        return m(m.route.Link, {
            class: "project-card",
            href: "/" + vnode.attrs.id,
            style: "background-image: url(" + vnode.attrs.image + ")",
            "aria-label": "Open " + vnode.attrs.title + " project details",
            "aria-haspopup": "dialog",
        }, [
            m(".project-card-banner", [
                m(".role", vnode.attrs.role),
                m(".duration", vnode.attrs.duration)
            ])
        ]);
    }
}
