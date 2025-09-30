import m from "mithril";
import Component from "../../core/Component";
import ProjectGroupHeader from "./ProjectGroupHeader";
import ProjectBanner from "./ProjectBanner";

export default class ProjectGroup extends Component {

    view(vnode) {
        return m('.project-group', [
            m(ProjectGroupHeader, {
                title: vnode.attrs.title,
                image: vnode.attrs.icon
            }),
            m('div', vnode.attrs.projects.map(function(project) {
                return m(ProjectBanner, project);
            }))
        ]);
    }
}
