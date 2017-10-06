const m = require('mithril');
const Component = require('./Component');

class Modal extends Component {

    view(vnode) {
        return m('.modal-blind', { onclick: () => { this.close() } }, [
            m('.modal', [
                m('.modal-content', [
                    this.renderContent(vnode)
                ])
            ])
        ]);
    }

    renderContent(vnode) {

    }

    close() {

    }
}

module.exports = Modal;
