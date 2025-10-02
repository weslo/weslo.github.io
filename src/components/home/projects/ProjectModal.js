import m from "mithril";
import Modal from "../../core/Modal";

export default class ProjectModal extends Modal {

    renderContent(vnode) {
        return m('.project-modal', [
            m('.header', {
                style: "background-image: url(" + vnode.attrs.project.bannerImage + ")",
            }, [
                m('.overlay', [
                    m('h1', vnode.attrs.project.title)
                ])
            ]),
            m('.content', [
                m(vnode.attrs.project.content)
            ])
        ]);
    }

    close() {
        super.close();
        m.route.set("/");
    }
}
