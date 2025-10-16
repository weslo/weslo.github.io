import m from "mithril";
import $ from "jquery";
import Component from "./Component";

export default class Modal extends Component {

    oninit() {
        this.isClosing = false;
    }

    view(vnode) {
        return m('.modal-blind.anim-fade-in', {
            onclick: () => { this.close(); }
        }, [
            m('.modal', { onclick: (e) => { e.stopPropagation(); } }, [
                this.renderContent(vnode)
            ])
        ]);
    }

    oncreate() {
        $('body').addClass('noscroll');
    }

    onbeforeremove(vnode) {
        this.isClosing = true;

        const el = vnode.dom;
        el.classList.remove('anim-fade-in');

        // Force a reflow so the browser acknowledges the class removal
        // before starting the fade-out. This prevents the “snap back”.
        void el.offsetWidth;

        el.classList.add('anim-fade-out');

        return new Promise(function(resolve) {
            const done = () => {
                el.removeEventListener("animationend", done);
                resolve();
            }

            el.addEventListener("animationend", done);
            setTimeout(resolve, 200);
        });
    }

    renderContent() { }

    close() {
        $('body').removeClass('noscroll');
    }
}
