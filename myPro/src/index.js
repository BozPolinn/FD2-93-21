import "./styles/main.scss";
import '@fortawesome/fontawesome-free/js/all.js';
import Application from "./core/application";
import Controller from "./core/controller";
import homePage from "./home/home.html";
import settingsPage from "./settings/settings.html";

const root = document.getElementById('root');
const application = new Application(root);
application.start();