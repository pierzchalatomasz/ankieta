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
    route: ({ route }) => {
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

            console.log(params);

            // path = path.split('question')[1];
            // var questionNumber = path.substring(path.lastIndexOf('/') + 1, path.length);

            // mainContainer.innerHTML = questionNumber;
        }

        return Router;
    }
};

export default Router;