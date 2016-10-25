export default function () {
    var mainContainer = document.querySelector('.main-container');

    var template = `
        <div class="welcome">
            <h2 class="welcome-heading">Witamy w ankiecie</h2>
            <input class="name-input" type="text" placeholder="Wpisz swoje imię">
            <a class="button button-welcome" href="#/single-choice-question">Rozpocznij ankietę</a>
        </div>
    `;

    mainContainer.innerHTML = template;
}