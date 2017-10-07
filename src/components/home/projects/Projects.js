const m = require('mithril');
const Component = require('../../core/Component');
const ProjectGroup = require('./ProjectGroup');

class Projects extends Component {

    view(vnode) {
        return m('section#games', [
            m('.row', [
                m('h2', "Games"),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Workinman Interactive",
                        icon: "imgs/project-group-icons/workinman.png",
                        projects: this.getProjectsInGroup(vnode.attrs.projects, "workinman")
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Yes And Games",
                        icon: "imgs/project-group-icons/yes-and-games.png",
                        projects: this.getProjectsInGroup(vnode.attrs.projects, "yes-and-games")
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Other Work",
                        icon: "imgs/project-group-icons/roc-game-dev.png",
                        projects: this.getProjectsInGroup(vnode.attrs.projects, "other")
                    })
                ])
            ])
        ]);
    }

    getProjectsInGroup(projects, group) {
        var inGroup = [];
        Object.keys(projects).forEach(function(id) {
            if(projects[id].group == group) {
                projects[id].id = id;
                inGroup.push(projects[id]);
            }
        });
        return inGroup;
    }
}

module.exports = Projects;
