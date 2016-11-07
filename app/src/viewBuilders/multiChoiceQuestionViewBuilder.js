import data from '../data/multiChoiceQuestion';
import http from '../utils/http';
import validate from '../utils/validate';

var sendData = async () => {
    if (!validate()) {
        return;
    }

    var data = {
        name: localStorage.name,
        singleChoiceQuestion: parseInt(localStorage.singleChoiceQuestion),
        multiChoiceQuestion: localStorage.multiChoiceQuestion.split(',').map(x => parseInt(x))
    };

    await http.post({ url: 'server_app/post.php', data });

    State.go('/summary');
};

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

var answersBuilder = function (answers) {
    var template = '';

    answers.forEach(function (answer, index) {
        template += `
            <div class="answer">
                <input type="checkbox" name="multi-choice-question" value="${index}" id=${index}>
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
            save();

            if (input.checked) {
                input.parentElement.className += ' active';
                return;
            }

            input.parentElement.className = input.parentElement.className.replace('active', '');
        };
    }, this);
};

var readSavedState = ({ inputs }) => {
    var answers = localStorage.multiChoiceQuestion;

    if (!answers) {
        return;
    }

    answers = answers.split(',');

    answers.forEach(function (answer) {
        var answer = parseInt(answer);

        inputs[answer].checked = true;
        inputs[answer].parentElement.className += ' active';
    });
};

export default function QuestionViewBuilder(routeParams) {
    var mainContainer = document.querySelector('.main-container');
    var questionObj = data;

    var template = `
        <div class="question">
            <h3>${questionObj.question}</h3>
            <div class="answers">
                ${answersBuilder(questionObj.answers)}
            </div>
            <div class="buttons-container">
                <a class="button" onClick="State.go('/single-choice-question')">Wstecz</a>
                <a class="button summary" onClick="State.go('/summary')">Wyślij</a>
            </div>
        </div>
    `;

    mainContainer.innerHTML = template;

    var inputs = document.querySelectorAll('input[name=multi-choice-question]');
    addChangeListener({ inputs });
    readSavedState({ inputs });

    document.querySelector('.summary').addEventListener('click', sendData);
}