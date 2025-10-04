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
                        subtitle: "5 years",
                        icon: "imgs/project-group-icons/dreamhaven_icon.png",
                        projects: this.getProjectsInGroup(vnode.attrs.projects, "dreamhaven")
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Blizzard Entertainment",
                        subtitle: "2 years",
                        icon: "imgs/project-group-icons/blizzard_icon.png",
                        projects: this.getProjectsInGroup(vnode.attrs.projects, "blizzard")
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Workinman Interactive",
                        subtitle: "2 years",
                        icon: "imgs/project-group-icons/workinman.png",
                        projects: this.getProjectsInGroup(vnode.attrs.projects, "workinman")
                    })
                ]),
            ]),
            m('.row', [
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Yes And Games",
                        subtitle: "3 years",
                        icon: "imgs/project-group-icons/yes-and-games.png",
                        projects: this.getProjectsInGroup(vnode.attrs.projects, "yes-and-games")
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Other Work",
                        subtitle: "Community, jams, etc",
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
