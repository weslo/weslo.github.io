import m from "mithril";
import Component from '../core/Component.js';

import Message from "./message/Message.js";
import Nav from "./nav/Nav.js";
import About from "./About.js";
import Footer from "./footer/Footer.js";

import Projects from "./projects/Projects.js";
import ProjectModal from "./projects/ProjectModal.js";
import ProjectsData from "./projects/ProjectsData.js"

import ProjectsNew from "./projects_new/Projects.js";
import ProjectModalNew from "./projects_new/ProjectModal.js";
import ProjectsDataNew from "./projects_new/ProjectsData.js";

const useNewProjectsContent = true;

export default class Home extends Component {
    view(vnode) {
        return m(".home", [
            m(Nav),
            m('.content-under-nav-margin'),
            m(Message),
            !useNewProjectsContent && m(Projects, { projects: ProjectsData }),
            useNewProjectsContent && m(ProjectsNew),
            m(About),
            m(Footer),
            !useNewProjectsContent && vnode.attrs.project != null && vnode.attrs.project !== "" && vnode.attrs.project in ProjectsData
                ? m(ProjectModal, { project: ProjectsData[vnode.attrs.project] })
                : null,
            useNewProjectsContent && vnode.attrs.project != null && vnode.attrs.project !== ""
                ? m(ProjectModalNew, ProjectsDataNew[vnode.attrs.project])
                : null,
        ]);
    }
}
