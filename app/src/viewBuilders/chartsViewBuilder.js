import multiChoiceQuestion from '../data/multiChoiceQuestion';
import Chart from 'chart.js/src/chart';

export default async function ({ data }) {
    var ctx = document.querySelector('#multiChoiceQuestionChart');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: multiChoiceQuestion.answers,
            datasets: [{
                label: 'ilość głosów',
                data: data.multiChoiceAnswers
            }]
        }
    });
}