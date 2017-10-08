const m = require('mithril');
const $ = require('jquery');
const Component = require('../../core/Component');

class NavLink extends Component {

    view(vnode) {
        return m('li', {
            onclick: function() {
                var offset = $(window).width() < 480 ? 160 : 120;
                $('html, body').animate({
                    scrollTop: $(vnode.attrs.id).offset().top - offset
                }, 200);
            }
        }, vnode.attrs.title);
    }
}

module.exports = NavLink;
