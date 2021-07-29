import View from "../core/view";
import progressPage from "./progress.html";

export default class ProgressView extends View {
    constructor(application) {
        super(application, progressPage);
    }

    mount() {
        super.mount();
        this.application.storage.getList().then(showResults, showError);

        function showResults(data) {
            const parent = document.getElementById('achievements');
            const container = document.createElement('div');
            container.classList.add('table');

            for (let i = data.length; i > 0; i--) {
                const row = document.createElement('div');
                row.classList.add('row');

                const nameUnit = document.createElement('div');
                nameUnit.classList.add('name');
                nameUnit.appendChild(document.createTextNode(data[i-1].name));
                row.appendChild(nameUnit);

                const scoreUnit = document.createElement('div');
                scoreUnit.classList.add('score');
                scoreUnit.appendChild(document.createTextNode(data[i-1].score));
                row.appendChild(scoreUnit);

                container.appendChild(row);
            }
            parent.appendChild(container);
        }

        function showError(error) {
            const parent = document.getElementById('achievements');
            parent.appendChild(document.createTextNode(error));
        }
    }

    unmount() {

        super.unmount();
    }
}