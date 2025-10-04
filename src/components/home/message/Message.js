import m from "mithril";
import Component from "../../core/Component";

export default class Nav extends Component {

    view() {
        return m('.message', [
            m('.row', [
                m('.message-card', [
                    m('i', { class: "fa fa-2x fa-flag" }),
                    m('p', "I'm working on my website right now. Please excuse any missing or broken content. Thanks and please get in touch! :)")
                ])
            ])
        ]);
    }
}
