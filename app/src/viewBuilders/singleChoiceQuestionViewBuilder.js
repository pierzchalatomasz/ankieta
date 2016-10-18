import data from '../data/singleChoiceQuestion';
import validate from '../utils/validate';

var answersBuilder = function (answers) {
    var template = '';

    answers.forEach(function (answer, index) {
        template += `
            <p>
                <input type="radio" name="single-choice-question" value="${index}">
                <label>${index + 1}. ${answer}</label>
            </p>
        `;
    }, this);

    return template
};

var addChangeListener = ({ inputs }) => {
    inputs.forEach(function (input) {
        input.onchange = () => localStorage.singleChoiceQuestion = input.value;
    }, this);
};

var readSavedState = ({ inputs }) => {
    if (!localStorage.singleChoiceQuestion) {
        return;
    }

    var answer = parseInt(localStorage.singleChoiceQuestion);
    inputs[answer].checked = true;
};

export default function QuestionViewBuilder(routeParams) {
    var mainContainer = document.querySelector('.main-container');
    var questionObj = data;

    var template = `
        <div class="question">
            <h3>The question is: ${questionObj.question}</h3>
            ${answersBuilder(questionObj.answers)}
            <a class="next">Next</a>
        </div>
    `;

    mainContainer.innerHTML = template;

    var inputs = document.querySelectorAll('input[name=single-choice-question]');
    addChangeListener({ inputs });
    readSavedState({ inputs });

    validate({ element: document.querySelector('.next'), inputs, route: '/multi-choice-question' });
}