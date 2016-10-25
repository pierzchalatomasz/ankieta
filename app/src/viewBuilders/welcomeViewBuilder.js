export default function () {
    var mainContainer = document.querySelector('.main-container');

    var template = `
        <div class="welcome">
            <h2 class="welcome-heading">Witamy w ankiecie</h2>
            <a class="button" href="#/single-choice-question">Rozpocznij ankietę</a>
        </div>
    `;

    mainContainer.innerHTML = template;
}