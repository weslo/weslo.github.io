const m = require('mithril');
const Component = require('../core/Component');

class Home extends Component {

    constructor() {
        super();
        this.projects = {
            "workinman": {
                group: "workinman",
                title: "Workinman Interactive",
                brief: "More information about Workinman",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: "Workinman Interactive is a service-based game studio in Rochester, NY."
            },
            "otto-the-automaton": {
                group: "workinman",
                title: "Otto the Automaton",
                brief: "Internal build automation software",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: "Otto the Automaton is a suite of build automation software built by and used internally at Workinman Interactive."
            },
            "smart-cycle": {
                group: "workinman",
                title: "Fisher-Price Smart Cycle",
                brief: "Games and bluetooth for connected bike",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            },
            "pj-masks": {
                group: "workinman",
                title: "PJ Masks Starlight Sprint",
                brief: "Procedurally generated infinirunner",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            },
            "block-party-3": {
                group: "workinman",
                title: "Block Party 3",
                brief: "Procedurally generated infinirunner",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            },
            "yes-and-games": {
                group: "yes-and-games",
                title: "Yes And Games",
                brief: "Indie game studio",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            },
            "adventure-guild": {
                group: "yes-and-games",
                title: "Adventure Guild",
                brief: "Tactical turn-based MMORPG for mobile",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            },
            "lazer-maze": {
                group: "yes-and-games",
                title: "Lazer Maze",
                brief: "Dodge lasers that fire with each beat",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            },
            "roc-game-dev": {
                group: "other",
                title: "Roc Game Dev",
                brief: "Rochester's game dev meetup",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            },
            "hearplay": {
                group: "other",
                title: "Hearplay",
                brief: "MMORPG for music listeners",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            },
            "a-small-robot-story": {
                group: "other",
                title: "A Small Robot Story",
                brief: "A small robot on a big journey",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            },
            "subway-spraypainter": {
                group: "other",
                title: "Subway Spraypainter",
                brief: "Paint Rochester's underground subway",
                bannerImage: "imgs/project-banners/project-frame.png",
                description: ""
            }
        };
    }

    view(vnode) {
        return m('.home', [
            m(require('./nav/Nav')),
            m(require('./projects/Projects'), {
                projects: this.projects
            }),
            m(require('./About')),
            m(require('./footer/Footer')),
            vnode.attrs.project != 'undefined' && vnode.attrs.project in this.projects ? m(require('./projects/ProjectModal'), this.projects[vnode.attrs.project])
                : null
        ]);
    }
}

module.exports = Home;
