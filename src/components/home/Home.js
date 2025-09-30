import m from "mithril";
import Component from '../core/Component.js';

import Nav from "./nav/Nav.js";
import Projects from "./projects/Projects.js";
import About from "./About.js";
import Footer from "./footer/Footer.js";
import ProjectModal from "./projects/ProjectModal.js";

export default class Home extends Component {

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
                            return m('.block-party-3', [
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
                bannerImage: "imgs/project-banners/yes-and-games.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.yes-and-games', [
                                m('.description', [
                                    m('p', "Yes And Games is an independent game studio based in Rochester, NY. I co-founded Yes And Games with my fellow RIT grad Nick Rabb in summer 2014, and we have shipped two games as a team since then."),
                                    m('p', "Our mission at Yes And Games is to design and develop mobile games that run counter to the abrasively microtransaction-driven design prevalent in the mobile games industry. Founded by a pair of Rochester improvisers, we use improv principles to drive our teamwork, game design, and work culture. Yes And Games is an informal team of about 6 developers, artists, and designers. We launched Adventure Guild after a successful Kickstarter in spring 2016 followed by Lazer Maze in summer 2016.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "http://yesandgames.com/",
                                        target: "_blank"
                                    }, "Website")
                                ])
                            ]);
                        }
                    };
                }
            },
            "adventure-guild": {
                group: "yes-and-games",
                title: "Adventure Guild",
                brief: "Tactical turn-based MMORPG for mobile",
                bannerImage: "imgs/project-banners/adventure-guild.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.adventure-guild', [
                                m('.description', [
                                    m('p', "Adventure Guild is a social Roguelike RPG built for mobile devices. Party up with your friends to explore the farthest reaches of the world. Tackle tactically challenging turn-based combat that forces you to work as a team."),
                                    m('p', "Adventure Guild began as a homework assignment in one of my classes in college. I built a prototype for the combat and UI flow with two friends for a production studio at RIT. We were granted funding by MAGIC at RIT to flesh out a strong beta, then ran a successful Kickstarter to support the game through launch in May 2016."),
                                    m('p', "The game client is built in Unity/C# alongside a completely ground-up Apache Java server that runs on AWS. We wrote the network serialization by hand with tight data usage in mind on mobile devices. It is a massive game, built by 6 developers, that includes tens of thousands of lines of code and almost 10 gigabytes of hand-painted characters, equipment, maps, props, and UI elements."),
                                    m('p', "Adventure Guild is available on iOS and Android mobile devices. It was featured on the show floor at GDC 2016, at Imagine RIT 2016, and at the Rochester Mini Maker Faire since 2015.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "http://adventureguildgame.com/",
                                        target: "_blank"
                                    }, "Website")
                                ])
                            ]);
                        }
                    };
                }
            },
            "lazer-maze": {
                group: "yes-and-games",
                title: "Lazer Maze",
                brief: "Dodge lasers that fire with each beat",
                bannerImage: "imgs/project-banners/lazer-maze.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.lazer-maze', [
                                m('.description', [
                                    m('p', "Lazer Maze is a music-driven arcade action game for touch devices where players run through an infinite maze of lazers that turn on and off to the beat of the song."),
                                    m('p', "The game was created as a design jam project that was polished and launched in about two months. It was developed by myself and Yes And Games lead artist Shin Yi Tan. We made it as an experiment in short-attention span game design, platform features practice, and an exercise in game polish. It was developed in Unity/C# and integrates features like iOS Game Center and Google Play Games leaderboards and achievements."),
                                    m('p', "Lazer Maze is available on iOS and Android phones and tablets.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "http://yesandgames.com/lazermaze",
                                        target: "_blank"
                                    }, "Website")
                                ])
                            ]);
                        }
                    };
                }
            },
            "roc-game-dev": {
                group: "other",
                title: "Roc Game Dev",
                brief: "Rochester's game dev meetup",
                bannerImage: "imgs/project-banners/roc-game-dev.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.lazer-maze', [
                                m('.description', [
                                    m('p', "The Roc Game Dev meetup is a collective of professional, student, and amateur game developers located in or around Rochester, NY, that meet monthly to workshop, share, and discuss game development. We meet once a month for workshops/general meetup at MAGIC at RIT and once a month for a social meetup at local bars and coffee shops around downtown Rochester."),
                                    m('p', "I have worked as an admin for the Roc Game Dev meetup since 2015 after meeting the founder, Robert Mostyn, at the Rochester Mini Maker Faire. I help plan meetups, workshops, and jams and occassionally work on promotion materials and club organization."),
                                    m('p', "The Roc Game Dev meetup plays a major role in Rochester's growing game development scene. We ran the first Rochester Game Fest in September 2017, where over 600 people showed up to play and celebrate games made locally in Rochester. I am incredibly proud of the work we've done with this club.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "http://rocgamedev.com/",
                                        target: "_blank"
                                    }, "Website")
                                ])
                            ]);
                        }
                    };
                }
            },
            "hearplay": {
                group: "other",
                title: "Hearplay",
                brief: "MMORPG for music listeners",
                bannerImage: "imgs/project-banners/hearplay.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.hearplay', [
                                m('.description', [
                                    m('p', "Hearplay is a mixed MMORPG and music streaming service that gamifies music listening and sharing. Players place their stations on a pixelated map of the world. They can load their stations up with songs, then view and interact with other users' stations while streaming music to their headphones."),
                                    m('p', "I worked as a game designer and project manager between product owners and a contracted development team to produce Hearplay. I worked on editor and design tools, prepared design documents, and facilitated communications between the various teams working on the project."),
                                    m('p', "Hearplay was built in JS using Pixi.js as a rendering engine and CakePHP as a server framework. The game is still in development.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "http://hearplay.com/",
                                        target: "_blank"
                                    }, "Website")
                                ])
                            ]);
                        }
                    };
                }
            },
            "a-small-robot-story": {
                group: "other",
                title: "A Small Robot Story",
                brief: "A small robot on a big journey",
                bannerImage: "imgs/project-banners/a-small-robot-story.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.a-small-robot-story', [
                                m('.description', [
                                    m('p', "A Small Robot Story is an adventure-platformer that is available for PC. You play as Rae, a small robot who activates and has no programming, so you need to set out and find out what's up!"),
                                    m('p', "Robert Mostyn built A Small Robot Story and obtained Steam Greenlight access for the game over the past few years. I'm assisting him in completing, polishing, and shipping the game on Steam. We're adding a fourth world, Steam features like achievements and trading cards, and working with local artist Jason Vector to add some amazing art and cutscenes."),
                                    m('p', "A Small Robot Story was built in Construct2.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "https://steamcommunity.com/sharedfiles/filedetails/?id=736468647",
                                        target: "_blank"
                                    }, "Steam")
                                ])
                            ]);
                        }
                    };
                }
            },
            "subway-spraypainter": {
                group: "other",
                title: "Subway Spraypainter",
                brief: "Paint Rochester's underground subway",
                bannerImage: "imgs/project-banners/subway-spraypainter.png",
                content: function(vnode) {
                    return {
                        view: function(vnode) {
                            return m('.subway-spraypainter', [
                                m('.description', [
                                    m('p', "Subway Spraypainter is a retro arcade game built for the 2017 Roc Game Dev jam. Spray paint the walls of Rochester's abandoned subway tunnels without getting caught by the police!"),
                                    m('p', "In summer 2017, the Roc Game Dev meetup organized a Rochester-themed game jam to be exhibited at the first Roc Game Fest. I helped build the showcase site, and built Subway Spraypainter as my submission. Workinman Lead Artist and Imaginary Monsters founder Peter Lazarski produced the art and Roc Game Dev founder Robert Mostyn wrote the music. We hired a professional actor (me) to voice act the police officer."),
                                    m('p', "Subway Spraypainter was built in Unity/C#, and the showcase was built by hand in JS using the rendering framework Mithril.")
                                ]),
                                m('.links', [
                                    m('a', {
                                        href: "http://rocgamedev.com/jam/games/subway-spraypainter/",
                                        target: "_blank"
                                    }, "Play"),
                                    m('a', {
                                        href: "http://rocgamedev.com/jam/",
                                        target: "_blank"
                                    }, "Showcase")
                                ])
                            ]);
                        }
                    };
                }
            }
        };
    }

    view(vnode) {
    return m(".home", [
      m(Nav),
      m(Projects, { projects: this.projects }),
      m(About),
      m(Footer),
      vnode.attrs.project !== "undefined" && vnode.attrs.project in this.projects
        ? m(ProjectModal, { project: vnode.attrs.project })
        : null
    ]);
  }
}
