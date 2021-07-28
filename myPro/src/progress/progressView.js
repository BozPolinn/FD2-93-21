import View from "../core/view";
import progressPage from "./progress.html";

export default class ProgressView extends View {
    constructor(application) {
        super(application, progressPage);
    }

    mount() {
        super.mount();

    }

    unmount() {

        super.unmount();
    }
}