import m from "mithril";
import Home from "./components/home/Home"

m.route(document.body, "/", {
    "/": Home,
    "/:project": Home
});
