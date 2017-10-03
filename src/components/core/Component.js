const m = require('mithril');

class Component {
    constructor(vnode) { }

    oncreate(vnode) { }

    oninit(vnode) { }

    view(vnode) { return m('div', "Hello, world!"); }
}

module.exports = Component;
