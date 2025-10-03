import m from "mithril";
import Component from "../../core/Component";
import ProjectGroup from "./ProjectGroup";

export default class Projects extends Component {

    view(vnode) {
        return m('section#games', [
            m('.row', [
                m('h2', "Games"),
            ]),
            m('.row', [
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Dreamhaven",
                        icon: "imgs/project-group-icons/dreamhaven_icon.png",
                        projects: this.getProjectsInGroup(vnode.attrs.projects, "dreamhaven")
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Blizzard Entertainment",
                        icon: "imgs/project-group-icons/blizzard_icon.png",
                        projects: []
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Workinman Interactive",
                        icon: "imgs/project-group-icons/workinman.png",
                        projects: this.getProjectsInGroup(vnode.attrs.projects, "workinman")
                    })
                ]),
            ]),
            m('.row', [
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
