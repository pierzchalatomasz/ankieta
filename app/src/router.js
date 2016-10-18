var mainContainer = document.querySelector('.main-container');

function compareRoutes({ route, path }) {
    if (route.length !== path.length) {
        return false;
    }

    var result = true;

    for (var i = 0; i < route.length; i++) {
        var paramName = route[i];

        if (paramName[0] !== ':' && route[i] !== path[i]) {
            result = false;
            break;
        }
    }

    return result;
}

var Router = {
    routes: [],

    route: ({ route, handler }) => {
        Router.routes.push({ route, handler });

        return Router;
    },

    performRouting: () => {
        var matchedRoute = null;

        Router.routes.forEach(function (x) {
            var { route, handler } = x;

            var path = window.location.hash;

            path = path.split('/')
                .splice(1) // remove hash
                .filter(x => x); // in case we have '/' at the end

            route = route.split('/')
                .filter(x => x);

            if (compareRoutes({ path, route })) {
                var params = {};

                for (var i = 0; i < route.length; i++) {
                    var paramName = route[i];

                    if (paramName[0] === ':') {
                        paramName = paramName.replace(':', '');
                        params[paramName] = path[i];
                    }
                }

                if (handler) {
                    handler(params);
                }

                matchedRoute = x;
            }
        }, this);

        if (!matchedRoute) {
            window.location.hash = '';
        }
    }
};

window.onload = Router.performRouting;
window.onhashchange = Router.performRouting;

export default Router;