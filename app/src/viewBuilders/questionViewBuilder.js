import data from '../data';

var answerBuilder = function ({ answer, index, questionId }) {
    return `
        <p>
            <input type="radio" name="question" value="${index}">
            <label>${index + 1}. ${answer}</label>
        </p>
    `;
};

export default function QuestionViewBuilder(routeParams) {
    var mainContainer = document.querySelector('.main-container');
    var questionId = parseInt(routeParams.id);
    var questionObj = data[questionId];

    var navBuilder = function () {
        var output = '';
        if (questionId > 0) output += `<a href="#/question/${questionId - 1}">Prev</a>`;
        if (questionId < data.length - 1) output += `<a href="#/question/${questionId + 1}">Next</a>`;
        return output;
    }

    var template = `
        <div class="question">
            <h3>The question is: ${questionObj.question}</h3>
            ${questionObj.answers.map((answer, index) => answerBuilder({answer, index, questionId}))}
            ${navBuilder()}
        </div>
    `;

    mainContainer.innerHTML = template;
}