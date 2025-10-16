import m from "mithril";
import Component from "../../core/Component";
import ProjectCard from "./ProjectCard";

import cardImageSecretDoor from "../../../../assets/imgs/cards/secret_door.png";
import cardImageBlizzard from "../../../../assets/imgs/cards/blizzard.png";
import cardImageWorkinman from "../../../../assets/imgs/cards/workinman.png";
import cardImageYesAndGames from "../../../../assets/imgs/cards/yes_and_games.png";

export default class Projects extends Component {

    view() {
        return m('section#games', [
            m('.row', [
                m('h2', "Games"),
            ]),
            m('.row', [
                m('.col-3', [
                    m(ProjectCard, {
                        title: "Secret Door Games",
                        id: "secret-door",
                        role: "Game Developer",
                        duration: "5 years",
                        image: cardImageSecretDoor,
                    })
                ]),
                m('.col-3', [
                    m(ProjectCard, {
                        title: "Blizzard Entertainment",
                        id: "blizzard-incubation",
                        role: "Software Engineer",
                        duration: "2 years",
                        image: cardImageBlizzard,
                    })
                ]),
                m('.col-3', [
                    m(ProjectCard, {
                        title: "Workinman Interactive",
                        id: "workinman",
                        role: "Game Developer",
                        duration: "2 years",
                        image: cardImageWorkinman,
                    })
                ]),
            ]),
            m('.row', [
                m('.col-3', [
                    m(ProjectCard, {
                        title: "Yes And Games",
                        id: "yes-and-games",
                        role: "Game Developer & Co-Founder",
                        duration: "3 years",
                        image: cardImageYesAndGames,
                    })
                ])
            ])
        ]);
    }
}
