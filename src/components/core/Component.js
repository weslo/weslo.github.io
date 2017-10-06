const m = require('mithril');

class Component {
    constructor(vnode) { }

    oncreate(vnode) { }

    oninit(vnode) { }

    onupdate(vnode) { }

    view(vnode) { return m('div', "Hello, world!"); }
}

module.exports = Component;
