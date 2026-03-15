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
const hasProject = (projectKey) => Object.prototype.hasOwnProperty.call(ProjectsData, projectKey);
const getProject = (projectKey) => projectKey != null && hasProject(projectKey)
    ? ProjectsData[projectKey]
    : null;

export default class Home extends Component {
    oninit(vnode) {
        this.redirectInvalidProject(vnode.attrs.project);
    }

    onbeforeupdate(vnode) {
        this.redirectInvalidProject(vnode.attrs.project);
        return true;
    }

    redirectInvalidProject(projectKey) {
        if (projectKey == null || projectKey === "" || getProject(projectKey) != null) {
            return;
        }

        m.route.set("/", null, { replace: true });
    }

    view(vnode) {
        const project = getProject(vnode.attrs.project);

        return m(".home", [
            m(Nav),
            m('.content-under-nav-margin'),
            showWorkInProgressMessage && m(Message),
            m(About),
            m(Projects),
            m(Footer),
            project != null
                ? m(ProjectModal, project)
                : null,
        ]);
    }
}
