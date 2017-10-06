const m = require('mithril');

class Component {
    constructor(vnode) { }

    view(vnode) { return m('div', "Hello, world!"); }

    oncreate(vnode) { }

    oninit(vnode) { }

    onupdate(vnode) { }

    onbeforeremove(vnode) { }

    onremote(vnode) { }
}

module.exports = Component;
