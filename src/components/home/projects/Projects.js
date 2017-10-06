const m = require('mithril');
const Component = require('../../core/Component');
const ProjectGroup = require('./ProjectGroup');

class Projects extends Component {

    view() {
        return m('section.projects', [
            m('.row', [
                m('h2', "Games"),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Workinman Interactive",
                        icon: "imgs/project-group-icons/workinman.png",
                        projects: [
                            {
                                title: "Unannounced Projects",
                                description: "More information about Workinman",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "Otto the Automaton",
                                description: "Internal build automation software",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "Fisher-Price Smart Cycle",
                                description: "Games and bluetooth for connected bike",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "PJ Masks Starlight Sprint",
                                description: "Procedurally generated infinirunner",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "Block Party 3",
                                description: "Minigame party suite",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            }
                        ]
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Yes And Games",
                        icon: "imgs/project-group-icons/yes-and-games.png",
                        projects: [
                            {
                                title: "Indie Games",
                                description: "About Yes And Games",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "Adventure Guild",
                                description: "Tactical turn-based MMORPG for mobile",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "Lazer Maze",
                                description: "Dodge lasers that fire with each beat",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "Exoterra",
                                description: "Super-weaoponized planet Earth defense",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            }
                        ]
                    })
                ]),
                m('.col-3', [
                    m(ProjectGroup, {
                        title: "Other Work",
                        icon: "imgs/project-group-icons/roc-game-dev.png",
                        projects: [
                            {
                                title: "Roc Game Dev",
                                description: "Rochester's game dev meetup",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "Hearplay",
                                description: "MMORPG for music listeners",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "A Small Robot Story",
                                description: "A small robot on a big journey",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            },
                            {
                                title: "Subway Spraypainter",
                                description: "Paint Rochester's underground subway",
                                bannerImage: "imgs/project-banners/project-frame.png"
                            }
                        ]
                    })
                ])
            ])
        ]);
    }
}

module.exports = Projects;
