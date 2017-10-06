const m = require('mithril');
const Component = require('../../core/Component');

class ProjectBanner extends Component {

    view(vnode) {
        return m('.project', [
            m('img', { src: "imgs/project-banners/project-frame.png" }),
        ])
    }
}

module.exports = ProjectBanner;
