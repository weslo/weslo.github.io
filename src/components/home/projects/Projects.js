const m = require('mithril');
const Component = require('../../core/Component');
const ProjectGroupHeader = require('./ProjectGroupHeader');

class Projects extends Component {

    view() {
        return m('#projects.projects', [
            m('.row', [
                m('.col-3', [
                    m(ProjectGroupHeader, {
                        title: "Workinman Interactive",
                        image: "imgs/project-group-icons/workinman.png"
                    }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                ]),
                m('.col-3', [
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                ]),
                m('.col-3', [
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                    m('img', { src: "imgs/project-banners/project-frame.png" }),
                ])
            ])
        ]);
    }
}

module.exports = Projects;
