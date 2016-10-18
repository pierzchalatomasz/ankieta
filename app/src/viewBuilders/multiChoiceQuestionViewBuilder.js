import data from '../data/multiChoiceQuestion';
import validate from '../utils/validate';

var save = () => {
    var values = [];
    var inputs = document.querySelectorAll('input[name=multi-choice-question]');

    inputs.forEach(function (input) {
        if (input.checked) {
            values.push(input.value);
        }
    }, this);

    localStorage.multiChoiceQuestion = values;
};

var addChangeListener = ({ inputs }) => {
    inputs.forEach(function (input) {
        input.onchange = save;
    }, this);
};

var answersBuilder = function (answers) {
    var template = '';

    answers.forEach(function (answer, index) {
        template += `
            <p>
                <input type="checkbox" name="multi-choice-question" value="${index}" onchange="save(${index})">
                <label>${index + 1}. ${answer}</label>
            </p>
        `;
    }, this);

    return template
};

var readSavedState = ({ inputs }) => {
    if (!localStorage.multiChoiceQuestion) {
        return;
    }

    var answers = localStorage.multiChoiceQuestion.split(',');
    answers.forEach(function (answer) {
        answer = parseInt(answer);
        inputs[answer].checked = true;
    }, this);
}

export default function QuestionViewBuilder(routeParams) {
    var mainContainer = document.querySelector('.main-container');
    var questionObj = data;

    var template = `
        <div class="question">
            <h3>The question is: ${questionObj.question}</h3>
            ${answersBuilder(questionObj.answers)}
            <a href="#/single-choice-question">Prev</a>
            <a class="summary">Summary</a>
        </div>
    `;

    mainContainer.innerHTML = template;

    var inputs = document.querySelectorAll('input[name=multi-choice-question]');
    addChangeListener({ inputs });
    readSavedState({ inputs });

    validate({ element: document.querySelector('.summary'), inputs, route: '/summary' });
}