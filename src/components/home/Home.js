import m from "mithril";
import Component from '../core/Component.js';

import Message from "./message/Message.js";
import Nav from "./nav/Nav.js";
import About from "./About.js";
import Footer from "./footer/Footer.js";

import Projects from "./projects/Projects.js";
import ProjectModal from "./projects/ProjectModal.js";
import ProjectsData from "./projects/ProjectsData.js";

const showWorkInProgressMessage = false;

export default class Home extends Component {
    view(vnode) {
        return m(".home", [
            m(Nav),
            m('.content-under-nav-margin'),
            showWorkInProgressMessage && m(Message),
            m(Projects),
            m(About),
            m(Footer),
            vnode.attrs.project != null && vnode.attrs.project !== ""
                ? m(ProjectModal, ProjectsData[vnode.attrs.project])
                : null,
        ]);
    }
}
