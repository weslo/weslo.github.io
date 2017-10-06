const m = require('mithril');
const Component = require('../core/Component');

class Home extends Component {

    constructor() {
        super();
        this.projects = {
            "workinman": {
                title: "Workinman Interactive",
                description: "Workinman Interactive is a service-based game studio in Rochester, NY."
            },
            "yes-and-games": {
                title: "Yes And Games",
                description: "Yes And Games is an independent game studio in Rochester NY."
            }
        };
    }

    view(vnode) {
        return m('.home', [
            m(require('./nav/Nav')),
            m(require('./projects/Projects')),
            m(require('./About')),
            m(require('./footer/Footer')),
            vnode.attrs.project != 'undefined' && vnode.attrs.project in this.projects ? m(require('./projects/ProjectModal'), this.projects[vnode.attrs.project])
                : null
        ]);
    }
}

module.exports = Home;
