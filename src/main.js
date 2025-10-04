import m from "mithril";
import Home from "./components/home/Home"

m.route.prefix = "";

m.route(document.body, "/", {
    "/": Home,
    "/:project": Home
});
