const m = require('mithril');
const Component = require('../core/Component');

class Home extends Component {

    constructor() {
        super();
        this.openProject = null;
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

    oninit(vnode) {
        if(vnode.attrs.project in this.projects) {
            this.openProject = this.projects[vnode.attrs.project];
        }
        else {
            m.route.set("/");
        }
    }

    view(vnode) {
        return m('.home', [
            m(require('./Nav')),
            m(require('./projects/Projects')),
            m(require('./About')),
            m(require('./footer/Footer')),
            this.openProject == null ? null :
                m(require('./projects/ProjectModal'), this.openProject)
        ]);
    }
}

module.exports = Home;
