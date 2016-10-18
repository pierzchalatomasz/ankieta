import singleChoiceQuestion from '../data/singleChoiceQuestion';
import multiChoiceQuestion from '../data/multiChoiceQuestion';

var answersBuilder = (i) => {
    return `<li>${multiChoiceQuestion.answers[i]}</li>`;
};

export default function () {
    var mainContainer = document.querySelector('.main-container');
    var singleChoiceAnswer = parseInt(localStorage.singleChoiceQuestion);
    var multiChoiceAnswers = localStorage.multiChoiceQuestion.split(',').map(x => parseInt(x));

    var template = `
        <div class="summary">
            <h3>Podsumowanie</h3>
            <h4>1. ${singleChoiceQuestion.question}</h4>
            <p>Twoja odpowiedź: 
                <ul>
                    <li>${singleChoiceQuestion.answers[singleChoiceAnswer]}</li>
                </ul>
            </p>
            <h4>2. ${multiChoiceQuestion.question}</h4>
            <p>Twoje odpowiedzi: 
                <ul>
                    ${multiChoiceAnswers.map(x => answersBuilder(x))}
                </ul>
            </p>
        </div>
    `;

    mainContainer.innerHTML = template;
}