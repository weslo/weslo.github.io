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
                bannerImage: "imgs/project-banners/workinman.png",
                content: function(vnode) {
                    return {
                        view: function() {
                            return m('.workinman', [
                                m('.description', [
                                    m('p', "Workinman is a service-based game studio located in Rochester, NY. We build connected toys and cross-platform games for clients like Fisher-Price, Little Tikes, Nickelodeon, and Disney."),
                                    m('p', "I work in the connected toys department of Workinman as a game and tools developer. My work balances on a rope between developing one or two major games and building and maintaining our in-house automation platform. I love the challenges that come with working in such an fast-paced, agile environment.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "https://workinman.com/",
                                        target: "_blank"
                                    }, "Website")
                                ])
                            ]);
                        }
                    };
                }
            },
            "otto-the-automaton": {
                group: "workinman",
                title: "Otto the Automaton",
                brief: "Internal build automation software",
                bannerImage: "imgs/project-banners/otto-the-automaton.png"
            },
            "smart-cycle": {
                group: "workinman",
                title: "Fisher-Price Smart Cycle",
                brief: "Games and bluetooth for connected bike",
                bannerImage: "imgs/project-banners/smart-cycle.png"
            },
            "pj-masks": {
                group: "workinman",
                title: "PJ Masks Starlight Sprint",
                brief: "Procedurally generated infinirunner",
                bannerImage: "imgs/project-banners/starlight-sprint.png"
            },
            "block-party-3": {
                group: "workinman",
                title: "Block Party 3",
                brief: "Procedurally generated infinirunner",
                bannerImage: "imgs/project-banners/block-party-3.png"
            },
            "yes-and-games": {
                group: "yes-and-games",
                title: "Yes And Games",
                brief: "Indie game studio",
                bannerImage: "imgs/project-banners/yes-and-games.png"
            },
            "adventure-guild": {
                group: "yes-and-games",
                title: "Adventure Guild",
                brief: "Tactical turn-based MMORPG for mobile",
                bannerImage: "imgs/project-banners/adventure-guild.png"
            },
            "lazer-maze": {
                group: "yes-and-games",
                title: "Lazer Maze",
                brief: "Dodge lasers that fire with each beat",
                bannerImage: "imgs/project-banners/lazer-maze.png"
            },
            "roc-game-dev": {
                group: "other",
                title: "Roc Game Dev",
                brief: "Rochester's game dev meetup",
                bannerImage: "imgs/project-banners/roc-game-dev.png"
            },
            "hearplay": {
                group: "other",
                title: "Hearplay",
                brief: "MMORPG for music listeners",
                bannerImage: "imgs/project-banners/hearplay.png"
            },
            "a-small-robot-story": {
                group: "other",
                title: "A Small Robot Story",
                brief: "A small robot on a big journey",
                bannerImage: "imgs/project-banners/a-small-robot-story.png"
            },
            "subway-spraypainter": {
                group: "other",
                title: "Subway Spraypainter",
                brief: "Paint Rochester's underground subway",
                bannerImage: "imgs/project-banners/subway-spraypainter.png"
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
