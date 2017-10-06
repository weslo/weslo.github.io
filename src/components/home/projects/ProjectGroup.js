const m = require('mithril');
const Component = require('../../core/Component');
const ProjectGroupHeader = require('./ProjectGroupHeader');

class ProjectGroup extends Component {

    view(vnode) {
        return m('.project-group', [
            m(ProjectGroupHeader, {
                title: vnode.attrs.title,
                image: vnode.attrs.bannerImage
            }),
            m('img', { src: "imgs/project-banners/project-frame.png" }),
            m('img', { src: "imgs/project-banners/project-frame.png" }),
            m('img', { src: "imgs/project-banners/project-frame.png" }),
            m('img', { src: "imgs/project-banners/project-frame.png" }),
            m('img', { src: "imgs/project-banners/project-frame.png" }),
        ]);
    }
}

module.exports = ProjectGroup;
