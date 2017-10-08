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
                        view: function(vnode) {
                            return m('.workinman', [
                                m('.description', [
                                    m('p', "Workinman is a service-based game studio located in Rochester, NY. We build connected toys and cross-platform games for clients like Fisher-Price, Little Tikes, Nickelodeon, and Disney."),
                                    m('p', "I work in the connected toys department of Workinman as a game and tools developer. My work balances on a rope between developing one or two major games and building and maintaining our in-house automation platform. I love the challenges that come with working in such an fast-paced, agile environment. We build connected products using Unity mixed with native Java, Objective-C, and Swift, web games using Haxe/JS, and use some Python when working on our build automation server.")
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
                bannerImage: "imgs/project-banners/otto-the-automaton.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.otto-the-automaton', [
                                m('.description', [
                                    m('p', "Otto is Workinman's in-house build automation platform. He dynamically processes and delivers builds configured by individual developers and interfaces with them via the Slack API."),
                                    m('p', "I built the core of Otto on a train ride to Connecticut because I was tired of manually configuring Unity builds on some of our connected toy projects. Since then, we have integrated source control monitoring, SMB/FTP build deliveries, Unity editor extensions for running local builds, and the Slack API for messaging and configuration. Otto runs a Python server that monitors git branches, pulls projects, and builds them via  a configuration file in the project repository. He exposes bash and C# pre/postprocessing hooks so developers can run their own custom code while the project is being processed."),
                                    m('p', "I don't plan to have kids, but consider Otto my robot son."),
                                    m('p', "Since Otto's code is proprietary, and he is only used internally at Workinman, I cannot share any more information about him. Please contact me with any questions.")
                                ])
                            ]);
                        }
                    };
                }
            },
            "smart-cycle": {
                group: "workinman",
                title: "Fisher-Price Smart Cycle",
                brief: "Games and bluetooth for connected bike",
                bannerImage: "imgs/project-banners/smart-cycle.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.smart-cycle', [
                                m('.description', [
                                    m('p', "The Fisher-Price Smart Cycle is a standing bike toy for kids that connects to iOS, Android and Amazon TVs and tablets, and Apple TVs, with which kids can play 3D racing games by pedaling and using the handlebars. I worked on the Smart Cycle API, BLE integration, and Workinman's mobile games for the product."),
                                    m('p', "The Fisher-Price Smart Cycle games were built in Unity with a hefty amount of native Java and Objective-C code to interface with the BLE functionality of the bike. The core app and first round of games were built in about a year by a team of 5-6 developers.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "https://fisher-price.com/smartcycle",
                                        target: "_blank"
                                    }, "Website")
                                ])
                            ]);
                        }
                    };
                }
            },
            "pj-masks": {
                group: "workinman",
                title: "PJ Masks: Starlight Sprint",
                brief: "Procedurally generated infinirunner",
                bannerImage: "imgs/project-banners/starlight-sprint.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.pj-masks', [
                                m('.description', [
                                    m('p', "PJ Masks: Starlight Sprint is a procedurally-generated infinirunner where kids play as each of the three PJ Masks venturing into the night to thwart the plans of their evil villains. Catboy, Owlette, and Gekko each jump into the fray with their own runner mechanics and challenging obstacles."),
                                    m('p', "I worked as a solo developer with an illustrator/animator for about 3 months on this game. It was built in Haxe for HTML5."),
                                    m('p', "PJ Masks: Starlight Sprint is accessible via the Disney Jr. App for iOS and Android.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "https://www.forbes.com/sites/andyrobertson/2017/03/02/new-pj-masks-starlight-sprint-game-out-now-in-disney-junior-app/#5e72fd056304",
                                        target: "_blank"
                                    }, "Press")
                                ])
                            ]);
                        }
                    };
                }
            },
            "block-party-3": {
                group: "workinman",
                title: "Block Party 3",
                brief: "Procedurally generated infinirunner",
                bannerImage: "imgs/project-banners/block-party-3.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.smart-cycle', [
                                m('.description', [
                                    m('p', "Block Party 3 is the third installment of the Nickelodeon Block Party party games series. Kids play as one of a myriad of Nickelodeon character like Spongebob, Lincoln, and Raphael in a turn-based strategy game with minigame challenges."),
                                    m('p', "I worked as a support developer on Block Party 3 as my introductory project at Workinman. It was built in Haxe for HTML5.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "http://www.nick.com/games/nickelodeon-block-party-3.html",
                                        target: "_blank"
                                    }, "Play")
                                ])
                            ]);
                        }
                    };
                }
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
