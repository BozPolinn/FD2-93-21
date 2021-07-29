import "core-js/es";
import "./styles/main.scss";
import Application from "./core/application";

const root = document.getElementById('root');
const application = new Application(root);
application.start();
