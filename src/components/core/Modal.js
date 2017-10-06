const m = require('mithril');
const Component = require('./Component');

class Modal extends Component {

    oninit() {
    }

    view(vnode) {
        return m('.modal-blind', { onclick: () => { this.close() } }, [
            m('.modal', [
                this.renderContent(vnode)
            ])
        ]);
    }

    renderContent(vnode) {

    }

    close() {

    }
}

module.exports = Modal;
