const m = require('mithril');
const Modal = require('../../core/Modal');

class ProjectModal extends Modal {

    renderContent(vnode) {
        return m('.project-modal', [
            m('h1', vnode.attrs.title),
            m('p', vnode.attrs.description)
        ]);
    }

    close() {
        m.route.set("/");
    }
}

module.exports = ProjectModal;
