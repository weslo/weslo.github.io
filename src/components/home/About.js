const m = require('mithril');
const Component = require('../core/Component');

class About extends Component {

    view() {
        return m('section#about', [
            m('.row', [
                m('h2', "About Me"),
                m('.col-3.col-tablet-1.portrait', [
                    m('img.circle', { src: "imgs/portrait.jpg" })
                ]),
                m('.col-3-2.about-text', [
                    m('.about-header', [
                        m('h3', "Hi, I'm Weslo.")
                    ]),
                    m('p', "I'm a game and tools engineer at Rochester-based Workinman Interactive, and co-founder of indie game studio Yes And Games. I also help run the game dev meetup in Rochester, NY. Making games is my life's work, and one of my passions. In my spare time, I'm a guitarist, backpacker, and dungeon master. Thanks for stopping by! I hope you enjoy my work. Feel free to reach out to me any way you prefer if you want to get in touch.")
                ])
            ])
        ]);
    }
}

module.exports = About;
