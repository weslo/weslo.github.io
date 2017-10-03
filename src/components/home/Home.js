const m = require('mithril');
const Component = require('../core/Component');
const Nav = require('./Nav');

class Home extends Component {

    view() {
        return m('.home', [
            m(Nav)
        ]);
    }
}

module.exports = Home;
