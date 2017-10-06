const m = require('mithril');
const Component = require('../../core/Component');

class ProjectGroupHeader extends Component {

    view(vnode) {
        return m('.project-group-header', [
            m('span', [
                m('img.circle', { src: vnode.attrs.image }),
                m('h4', vnode.attrs.title)
            ])
        ])
    }
}

module.exports = ProjectGroupHeader;
