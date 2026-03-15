import m from "mithril";
import Component from "../../core/Component";
import $ from "jquery";

export default class NavLink extends Component {

    view(vnode) {
        return m("li", [
            m("a.nav-link", {
                href: vnode.attrs.id,
                onclick: function(e) {
                    e.preventDefault();
                    var offset = $(window).width() < 480 ? 160 : 120;
                    $("html, body").animate({
                        scrollTop: $(vnode.attrs.id).offset().top - offset
                    }, 200);
                }
            }, vnode.attrs.title)
        ]);
    }
}
