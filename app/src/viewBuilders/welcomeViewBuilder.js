export default function () {
    var mainContainer = document.querySelector('.main-container');

    var template = `
        <div class="welcome">
            <h3>Witamy w ankiecie</h3>
            <a href="#/question/0">Rozpocznij ankietę</a>
        </div>
    `;

    mainContainer.innerHTML = template;
}