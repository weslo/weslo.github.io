const m = require('mithril');
const $ = require('jquery');
const Component = require('../../core/Component');

class NavLink extends Component {

    view(vnode) {
        return m('li', {
            onclick: function() {
                $('html, body').animate({
                    scrollTop: $(vnode.attrs.id).offset().top - 120
                }, 200);
            }
        }, vnode.attrs.title);
    }
}

module.exports = NavLink;
