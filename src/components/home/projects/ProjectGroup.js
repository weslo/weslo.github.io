const m = require('mithril');
const Component = require('../../core/Component');
const ProjectGroupHeader = require('./ProjectGroupHeader');
const ProjectBanner = require('./ProjectBanner');

class ProjectGroup extends Component {

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

module.exports = ProjectGroup;
