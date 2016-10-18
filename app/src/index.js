import Router from './router';
import data from './data';
import singleChoiceQuestionViewBuilder from './viewBuilders/singleChoiceQuestionViewBuilder';
import multiChoiceQuestionViewBuilder from './viewBuilders/multiChoiceQuestionViewBuilder';
import welcomeViewBuilder from './viewBuilders/welcomeViewBuilder';
import summaryViewBuilder from './viewBuilders/summaryViewBuilder';

Router.route({
    route: 'single-choice-question/',
    handler: singleChoiceQuestionViewBuilder
})
.route({
    route: 'multi-choice-question/',
    handler: multiChoiceQuestionViewBuilder
})
.route({
    route: '/',
    handler: welcomeViewBuilder
})
.route({
    route: 'summary/',
    handler: summaryViewBuilder
});