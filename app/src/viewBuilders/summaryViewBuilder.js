import singleChoiceQuestion from '../data/singleChoiceQuestion';
import multiChoiceQuestion from '../data/multiChoiceQuestion';
import chartsViewBuilder from './chartsViewBuilder';
import http from '../utils/http';

var answersBuilder = (answers) => {
    var template = '';

    answers.forEach(function (i) {
        template += `<li>${i + 1}. ${multiChoiceQuestion.answers[i]}</li>`;
    }, this);

    return template;
};

var setClearEvent = () => {
    document.querySelector('.clear').onclick = () => {
        ['name', 'singleChoiceQuestion', 'multiChoiceQuestion'].map(x => localStorage.removeItem(x));
        State.go('/');
    };
};

var getData = async () => {
    var res = await http.get({ url: 'server_app/get.php' });
    return res;
};

var getSingleAnswer = (answers) => {
    var max = 0;
    var index;

    for (var i = 0; i < answers.length; i++) {
        if (answers[i] > max) {
            max = answers[i];
            index = i;
        }
    };

    return index;
};

export default async function () {
    var mainContainer = document.querySelector('.main-container');
    var data = await getData();
    var singleChoiceAnswer = getSingleAnswer(data.singleChoiceAnswers);

    var template = `
        <div class="summary question">
            <h2>Podsumowanie wyników</h2>
                <div class="answers">
                    <div class="answer">
                        <h4>${singleChoiceQuestion.question}</h4>
                        <p>Użytkownicy najczęściej wybierali:</p>
                        ${singleChoiceQuestion.answers[singleChoiceAnswer]}
                    </div>
                    <div class="answer">
                        <h4>${multiChoiceQuestion.question}</h4>
                        <canvas id="multiChoiceQuestionChart" height="200"></canvas>
                    </div>
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

    chartsViewBuilder({ data });   
}