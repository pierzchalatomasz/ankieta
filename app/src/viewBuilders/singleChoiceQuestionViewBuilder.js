import data from '../data/singleChoiceQuestion';
import validate from '../utils/validate';
import isStatePermitted from '../utils/isStatePermitted';

var answersBuilder = function (answers) {
    var template = '';

    answers.forEach(function (answer, index) {
        template += `
            <div class="answer">
                <input type="radio" name="single-choice-question" value="${index}" id=${index}>
                <label for="${index}">${index + 1}. ${answer}</label>
            </div>
        `;
    }, this);

    return template
};

var addChangeListener = ({ inputs }) => {
    inputs = Array.from(inputs);
    
    inputs.forEach(function (input) {
        input.onchange = () => {
            localStorage.singleChoiceQuestion = input.value;

            inputs.forEach(function (input) {
                input.parentElement.className = input.parentElement.className.replace('active', '');
            }, this);

            if (input.checked) {
                input.parentElement.className += ' active';
            }
        };
    }, this);
};

var readSavedState = ({ inputs }) => {
    var answer = parseInt(localStorage.singleChoiceQuestion);

    if (isNaN(answer)) {
        return;
    }

    inputs[answer].checked = true;
    inputs[answer].parentElement.className += ' active';
};

export default function QuestionViewBuilder(routeParams) {
    isStatePermitted({ prevRoute: '/', field: localStorage.name });

    var mainContainer = document.querySelector('.main-container');
    var questionObj = data;

    var template = `
        <div class="question">
            <h3>${questionObj.question}</h3>
            <div class="answers">
                ${answersBuilder(questionObj.answers)}
            </div>
            <a class="button next">Następne</a>
        </div>
    `;

    mainContainer.innerHTML = template;

    window.MathJax.Hub.Typeset();

    var inputs = document.querySelectorAll('input[name=single-choice-question]');
    addChangeListener({ inputs });
    readSavedState({ inputs });

    validate({ element: document.querySelector('.next'), inputs, route: '/multi-choice-question' });
}