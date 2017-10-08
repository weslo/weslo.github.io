const m = require('mithril');
const Modal = require('../../core/Modal');

class ProjectModal extends Modal {

    renderContent(vnode) {
        return m('.project-modal', [
            m('.header', {
                style: "background-image: url(" + vnode.attrs.bannerImage + ")",
            }, [
                m('.overlay', [
                    m('h1', vnode.attrs.title)
                ])
            ]),
            m('.content', [
                m(vnode.attrs.content)
            ])
        ]);
    }

    close() {
        m.route.set("/");
    }
}

module.exports = ProjectModal;
