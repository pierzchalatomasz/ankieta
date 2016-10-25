import singleChoiceQuestion from '../data/singleChoiceQuestion';
import multiChoiceQuestion from '../data/multiChoiceQuestion';

var answersBuilder = (answers) => {
    var template = '';

    answers.forEach(function(i) {
        template += `<li>${i + 1}. ${multiChoiceQuestion.answers[i]}</li>`;    
    }, this);
    
    return template;
};

export default function () {
    var mainContainer = document.querySelector('.main-container');
    var singleChoiceAnswer = parseInt(localStorage.singleChoiceQuestion);
    var multiChoiceAnswers = localStorage.multiChoiceQuestion.split(',').map(x => parseInt(x));

    var template = `
        <div class="summary">
            <h2>Podsumowanie</h2>
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
            <a class="button" href="#/">Powrót do startu</a>
        </div>
    `;

    mainContainer.innerHTML = template;
}