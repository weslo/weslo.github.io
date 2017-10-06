const m = require('mithril');
const Component = require('./Component');

class Modal extends Component {

    view(vnode) {
        return m('.modal-blind.anim-fade-in', { onclick: () => { this.close() } }, [
            m('.modal', [
                this.renderContent(vnode)
            ])
        ]);
    }

    onbeforeremove(vnode) {
        vnode.dom.classList.remove('anim-fade-in');
        vnode.dom.classList.add('anim-fade-out');
        return new Promise(function(resolve) {
            setTimeout(resolve, 200);
        });
    }

    renderContent(vnode) { }

    close() { }
}

module.exports = Modal;
