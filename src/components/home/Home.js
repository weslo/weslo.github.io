const m = require('mithril');
const Component = require('../core/Component');

class Home extends Component {

    view() {
        return m('.home', [
            m(require('./Nav')),
            m(require('./projects/Projects')),
            m(require('./About')),
            m(require('./footer/Footer'))
        ]);
    }
}

module.exports = Home;
