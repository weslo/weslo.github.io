import m from "mithril";
import Component from '../core/Component.js';

import ProjectsData from "./data/ProjectsData.js"
import Message from "./message/Message.js";
import Nav from "./nav/Nav.js";
import Projects from "./projects/Projects.js";
import About from "./About.js";
import Footer from "./footer/Footer.js";
import ProjectModal from "./projects/ProjectModal.js";

export default class Home extends Component {
    view(vnode) {
        return m(".home", [
            m(Nav),
            m('.content-under-nav-margin'),
            m(Message),
            m(Projects, { projects: ProjectsData }),
            m(About),
            m(Footer),
            vnode.attrs.project !== "undefined" && vnode.attrs.project in ProjectsData
                ? m(ProjectModal, { project: ProjectsData[vnode.attrs.project] })
                : null
        ]);
    }
}
