const m = require('mithril');
const Component = require('../../core/Component');
const ProjectGroup = require('./ProjectGroup');

class Projects extends Component {

    view() {
        return m('#projects.projects', [
            m('.row', [
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Workinman Interactive",
                        bannerImage: "imgs/project-group-icons/workinman.png"
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Yes And Games",
                        bannerImage: "imgs/project-group-icons/yes-and-games.png"
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Other Work",
                        bannerImage: "imgs/project-group-icons/roc-game-dev.png"
                    })
                ])
            ])
        ]);
    }
}

module.exports = Projects;
