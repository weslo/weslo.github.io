const m = require('mithril');
const Component = require('../core/Component');

class About extends Component {

    view() {
        return m('section.about', [
            m('.row', [
                m('h1', "About Me"),
                m('.col-2', [

                ]),
                m('.col-2-3', [

                ])
            ])
        ]);
    }
}

module.exports = About;
