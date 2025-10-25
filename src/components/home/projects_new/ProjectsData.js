import m from "mithril";

import imgSunderfolkKeyArt01 from "../../../../assets/imgs/secret_door/sunderfolk_keyart_01.png";
import imgSunderfolkScreenshot01 from "../../../../assets/imgs/secret_door/sunderfolk_screenshot_01.png";
import imgSunderfolkScreenshot02 from "../../../../assets/imgs/secret_door/sunderfolk_screenshot_02.png";
import imgSunderfolkScreenshot03 from "../../../../assets/imgs/secret_door/sunderfolk_screenshot_03.png";
import imgSunderfolkScreenshot04 from "../../../../assets/imgs/secret_door/sunderfolk_screenshot_04.png";
import imgSunderfolkScreenshot05 from "../../../../assets/imgs/secret_door/sunderfolk_screenshot_05.png";
import imgSunderfolkPhoto01 from "../../../../assets/imgs/secret_door/sunderfolk_photo_01.png";
import imgSunderfolkPhoto02 from "../../../../assets/imgs/secret_door/sunderfolk_photo_02.png";

import imgBlizzardKeyArt01 from "../../../../assets/imgs/blizzard/blizzard-key-art-01.jpg";
import imgRumbleKeyArt01 from "../../../../assets/imgs/blizzard/rumble-key-art-01.jpeg";
import imgRumbleScreenshot01 from "../../../../assets/imgs/blizzard/rumble-screenshot-01.jpg";

import imgWorkinmanKeyArt01 from "../../../../assets/imgs/workinman/workinman_keyart_01.webp";
import imgWorkinmanSmartCycle01 from "../../../../assets/imgs/workinman/workinman_smartcycle_01.jpg";
import imgWorkinmanPjmasks01 from "../../../../assets/imgs/workinman/workinman_pjmasks_01.jpg";
import imgWorkinmanBlockparty301 from "../../../../assets/imgs/workinman/workinman_blockparty3_01.webp";

import imgYesAndGamesKeyart01 from "../../../../assets/imgs/yesandgames/yesandgames_keyart_01.png";
import imgAdventureGuildKeyArt01 from "../../../../assets/imgs/yesandgames/adventureguild_keyart_01.png";
import imgAdventureGuildKeyArt02 from "../../../../assets/imgs/yesandgames/adventureguild_keyart_02.png";
import imgAdventureGuildKeyArt03 from "../../../../assets/imgs/yesandgames/adventureguild_keyart_03.png";
import imgLazerMazeKeyArt01 from "../../../../assets/imgs/yesandgames/lazermaze_keyart_01.png";
import imgAdventureGuildPhoto01 from "../../../../assets/imgs/yesandgames/adventureguild_photo_01.jpg";
import imgAdventureGuildPhoto02 from "../../../../assets/imgs/yesandgames/adventureguild_photo_02.JPG";
import imgAdventureGuildScreenshot01 from "../../../../assets/imgs/yesandgames/adventureguild_screenshot_01.png";
import imgAdventureGuildScreenshot02 from "../../../../assets/imgs/yesandgames/adventureguild_screenshot_02.png";

export default {

    "secret-door": {
        title: "Secret Door",
        images: [
            {
                src: imgSunderfolkKeyArt01,
                alt: "Sunderfolk key art",
                style: "object-position: bottom;",
            },
            {
                src: imgSunderfolkScreenshot01,
                alt: "Turn-based tactics gameplay in Sunderfolk",
                style: "object-position: left;",
            },
            {
                src: imgSunderfolkScreenshot02,
                alt: "Character select in Sunderfolk",
                style: "object-position: center;",
            },
            {
                src: imgSunderfolkPhoto01,
                alt: "Sunderfolk couch co-op",
                style: "object-position: center;",
            },
            {
                src: imgSunderfolkScreenshot03,
                alt: "Drawing a fate card in Sunderfolk",
                style: "object-position: right;",
            },
            {
                src: imgSunderfolkScreenshot04,
                alt: "The town of Arden",
                style: "object-position: center;",
            },
            {
                src: imgSunderfolkPhoto02,
                alt: "Sunderfolk phone controllers",
                style: "object-position: center;",
            },
            {
                src: imgSunderfolkScreenshot05,
                alt: "Storytelling in Sunderfolk",
                style: "object-position: bottom left;",
            },
        ],
        content: function() {
            return {
                view: function() {
                    return m('.secret-door', [
                        m('.description', [
                            m('p', "Secret Door is a new game development studio located in southern California and published by Dreamhaven."),
                            m('p', "Our initial focus is to create collaborative, social experiences that are deeply connective, steer into uncharted territory, and build a sustainable home for our teams."),
                            m('p', "I joined Secret Door in May 2020 as the first game developer on the team. I led the charge in building the foundation for our first game Sunderfolk and saw it across the finish line, spending substantial time on gameplay, UI/UX, backend technology, leadership, and more."),
                            m('p', "I spent more than five years working on Sunderfolk and led projects in gameplay, engineering, and UX design and development such as the phone-based control scheme in tactics combat, town, and character select."),
                            m('p', "More recently, I have begun to help lead design and development on future titles at Secret Door."),
                        ]),
                        m('.links', [
                            m('a', {
                                href: "https://sunderfolk.com/",
                                target: "_blank"
                            }, "Sunderfolk Website"),
                            m('a', {
                                href: "https://store.steampowered.com/app/2414270/Sunderfolk/",
                                target: "_blank"
                            }, "Sunderfolk on Steam"),
                            m('a', {
                                href: "https://secretdoorgames.com/",
                                target: "_blank"
                            }, "Secret Door Website"),
                            m('a', {
                                href: "https://dreamhaven.com/",
                                target: "_blank"
                            }, "Dreamhaven Website"),
                        ])
                    ]);
                }
            };
        }
    },

    "blizzard": {
        title: "Blizzard Entertainment",
        images: [
            {
                src: imgBlizzardKeyArt01,
                alt: "Blizzard key art",
                style: "object-position: center;",
            },
            {
                src: imgRumbleKeyArt01,
                alt: "Warcraft Rumble key art",
                style: "object-position: center;",
            },
            {
                src: imgRumbleScreenshot01,
                alt: "Warcraft Rumble gameplay screenshot",
                style: "object-position: center;",
            },
        ],
        content: function() {
            return {
                view: function() {
                    return m('.blizzard', [
                        m('.description', [
                            m('p', "I worked in Blizzard Entertainment's Incubation department on more than three titles and assisted in early iteration on their in-house game engine. I wore many hats, including tools engineering, client-side and UI/UX engineering, content engineering, and game and UI/UX design."),
                            m('p', "I'm not able to publicly share details for most of my work for Blizzard in their incubation department. Please contact me privately if you want to learn more about my work here."),
                            m('p', "The last project I worked on during my tenure at Blizzard was Warcraft Rumble, which shipped on iOS and Android in November 2023."),
                            m('p', "Warcraft Rumble is a mobile action strategy game set within the Warcraft universe where collectible Minis come to life to battle in frantic melee skirmishes. Play in multiple modes, including the single player campaign, going head-to-head in epic PvP battles, and more. Experience the true meaning of joyful chaos!"),
                            m('p', "I worked on Warcraft Rumble as a client and content tools engineer. I wore many hats in the frontend realm, and worked on tools for designers and artists to build levels, tools for engineers to optimize graphics and build output, and optimizations for the Unity engine and editor that were critical to shipping the game."),
                        ]),
                        m('.links', [
                            m('a', {
                                href: "https://blizzard.com/",
                                target: "_blank"
                            }, "Blizzard Website"),
                            m('a', {
                                href: "https://warcraftrumble.blizzard.com/",
                                target: "_blank"
                            }, "Warcraft Rumble Website"),
                        ])
                    ]);
                }
            };
        }
    },

    "workinman": {
        title: "Workinman Interactive",
        images: [
            {
                src: imgWorkinmanKeyArt01,
                alt: "Workinman key art",
                style: "object-position: center;",
            },
            {
                src: imgWorkinmanSmartCycle01,
                alt: "Fisher-Price Think & Learn Smart Cycle",
                style: "object-position: center right;",
            },
            {
                src: imgWorkinmanPjmasks01,
                alt: "PJ Masks Starlight Sprint",
                style: "object-position: bottom left;",
            },
            {
                src: imgWorkinmanBlockparty301,
                alt: "Block Party 3",
                style: "object-position: top left;",
            },
        ],
        content: function() {
            return {
                view: function() {
                    return m('.workinman', [
                        m('.description', [
                            m('p', "Workinman is a service-based game studio located in Rochester, NY. During my tenure at Workinman, I helped with building connected toys and cross-platform games for clients like Fisher-Price, Little Tikes, Nickelodeon, and Disney."),
                            m('p', "I worked in the connected toys department of Workinman as a game and tools developer. My work balanced on a rope between continuously developing one or two major games and building and maintaining our in-house automation platform. We built connected products using Unity mixed with native Java, Objective-C, and Swift, web games using Haxe/JS, and use some Python when working on our build automation server."),
                            m('p', "Some of the products I helped ship at Workinman include:"),
                            m('ul', [
                                m('li', "The Fisher-Price Smart Cycle, a standing bike toy for kids that connects to iOS, Android and Amazon TVs and tablets, and Apple TVs, with which kids can play 3D racing games by pedaling and using the handlebars. I worked on the Smart Cycle API, BLE integration, and Workinman's mobile games built in Unity for the product."),
                                m('li', "PJ Masks: Starlight Sprint, a procedurally-generated infinirunner where kids play as each of the three PJ Masks venturing into the night to thwart the plans of their evil villains. I worked as a solo developer with an illustrator/animator for about 3 months on this game. It was built in Haxe for HTML5."),
                                m('li', "Block Party 3, the third installment of the Nickelodeon Block Party party games series. Kids play as one of a myriad of Nickelodeon character like Spongebob, Lincoln, and Raphael in a turn-based strategy game with minigame challenges. I worked as a support developer on Block Party 3 as my introductory project at Workinman. It was built in Haxe for HTML5."),
                                m('li', "Otto the Automaton, Workinman's in-house build automation platform. He dynamically processes and delivers builds configured by individual developers and interfaces with them via the Slack API. I built the core of Otto on a train ride to Connecticut because I was tired of manually configuring Unity builds on some of our connected toy projects."),
                            ])
                        ]),
                        m('.links', [
                            m('a', {
                                href: "https://workinman.com/",
                                target: "_blank"
                            }, "Workinman Website"),
                        ])
                    ]);
                }
            };
        }
    },

    "yes-and-games": {
        title: "Yes And Games",
        images: [
            {
                src: imgYesAndGamesKeyart01,
                alt: "Yes And Games key art",
                style: "object-position: center;",
            },
            {
                src: imgAdventureGuildPhoto01,
                alt: "Yes And Games team photo",
                style: "object-position: center;",
            },
            {
                src: imgAdventureGuildPhoto02,
                alt: "Adventure Guild character customization screenshot",
                style: "object-position: center;",
            },
            {
                src: imgAdventureGuildKeyArt01,
                alt: "Adventure Guild key art",
                style: "object-position: center right;",
            },
            {
                src: imgLazerMazeKeyArt01,
                alt: "Lazer Maze key art",
                style: "object-position: center;",
            },
            {
                src: imgAdventureGuildScreenshot01,
                alt: "Adventure Guild combat screenshot",
                style: "object-position: center;",
            },
            {
                src: imgAdventureGuildScreenshot02,
                alt: "Adventure Guild character customization screenshot",
                style: "object-position: center;",
            },
            {
                src: imgAdventureGuildKeyArt03,
                alt: "Adventure Guild combat key art",
                style: "object-position: center;",
            },
            {
                src: imgAdventureGuildKeyArt02,
                alt: "Adventure Guild bluffs key art",
                style: "object-position: center;",
            },
        ],
        content: function() {
            return {
                view: function() {
                    return m('.yesandgames', [
                        m('.description', [
                            m('p', "Yes And Games is an independent game studio based in Rochester, NY. I co-founded Yes And Games with my fellow RIT grad Nick Rabb in summer 2014, and we have shipped two games as a team since then."),
                            m('p', "Our mission at Yes And Games is to design and develop mobile games that run counter to the abrasively microtransaction-driven design prevalent in the mobile games industry. Founded by a pair of Rochester improvisers, we use improv principles to drive our teamwork, game design, and work culture. Yes And Games is an informal team of about 6 developers, artists, and designers. We launched Adventure Guild after a successful Kickstarter in spring 2016 followed by Lazer Maze in summer 2016."),
                            m('p', "I started Adventure Guild as a side project in 2014 that eventually turned into my first business. I designed and developed the game on my own with help from friends until our successful 2016 Kickstarter and grants from RIT gave me the chance to hire a small team and ship two games. I co-founded the studio, ran the business, designed and developed the game, led the team, and contributed to everything I could including art and audio."),
                            m('p', "Yes And Games and both of our games shut down in 2018, but it was the ride of a lifetime, and I look forward to the chance to try starting my own business again."),
                        ]),
                        m('.links', [
                            m('a', {
                                href: "https://www.kickstarter.com/projects/yesandgames/adventure-guild",
                                target: "_blank"
                            }, "Adventure Guild 2016 Kickstarter"),
                        ])
                    ]);
                }
            };
        }
    },
};