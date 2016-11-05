var validate = ({ element, inputs, route }) => {
    element.onclick = (e) => {
        var input = document.querySelector('.name-input');

        if (input.value) {
            save(input.value);
            window.location.hash = route;
            return;
        }

        alert('Nie podałeś swojego imienia!');
    };
};

var save = (name) => {
    localStorage.name = name;
};

export default function () {
    var mainContainer = document.querySelector('.main-container');

    var template = `
        <div class="welcome">
            <h2 class="welcome-heading">Witamy w ankiecie</h2>
            <input class="name-input" type="text" placeholder="Wpisz swoje imię" value="${localStorage.name || ''}">
            <a class="button button-welcome">Rozpocznij ankietę</a>
        </div>
    `;

    mainContainer.innerHTML = template;

    validate({ element: document.querySelector('.button-welcome'), route: '/single-choice-question' });
}