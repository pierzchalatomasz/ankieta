import Router from './router';
import data from './data';
import questionViewBuilder from './viewBuilders/questionViewBuilder';
import welcomeViewBuilder from './viewBuilders/welcomeViewBuilder';

Router.route({
    route: 'question/:id',
    handler: questionViewBuilder
})
.route({
    route: '',
    handler: welcomeViewBuilder
})
.route({
    route: 'thankyou'
})