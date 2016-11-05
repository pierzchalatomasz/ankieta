import singleChoiceQuestion from '../data/singleChoiceQuestion';
import multiChoiceQuestion from '../data/multiChoiceQuestion';
import isStatePermitted from '../utils/isStatePermitted';

var answersBuilder = (answers) => {
    var template = '';

    answers.forEach(function(i) {
        template += `<li>${i + 1}. ${multiChoiceQuestion.answers[i]}</li>`;    
    }, this);
    
    return template;
};

var getName = () => {
    return localStorage.name || '';
};

var setClearEvent = () => {
    document.querySelector('.clear').onclick = () => {
        ['name', 'singleChoiceQuestion', 'multiChoiceQuestion'].map(x => localStorage.removeItem(x));
        window.location.hash = '/';
    };
};

export default function () {
    isStatePermitted({ prevRoute: '/multi-choice-question', field: localStorage.multiChoiceQuestion });

    var mainContainer = document.querySelector('.main-container');
    var singleChoiceAnswer = parseInt(localStorage.singleChoiceQuestion);
    var multiChoiceAnswers = localStorage.multiChoiceQuestion.split(',').map(x => parseInt(x));

    var template = `
        <div class="summary">
            <h2>Podsumowanie</h2>
            <h4>Twoje imię: ${getName()}</h4>
            <div class="questions">
                <h4>Pytanie 1: ${singleChoiceQuestion.question}</h4>
                <p>Twoja odpowiedź: 
                    <ul>
                        <li>${singleChoiceAnswer + 1}. ${singleChoiceQuestion.answers[singleChoiceAnswer]}</li>
                    </ul>
                </p>
                <h4>Pytanie 2: ${multiChoiceQuestion.question}</h4>
                <p>Twoje odpowiedzi: 
                    <ul>
                        ${answersBuilder(multiChoiceAnswers)}
                    </ul>
                </p>
            </div>
            <div class="buttons-container">
                <a class="button" href="#/">Powrót do startu</a>
                <a class="button clear">Wyczyść i wróć na start</a>
            </div>
        </div>
    `;

    mainContainer.innerHTML = template;

    window.MathJax.Hub.Typeset();

    setClearEvent();
}