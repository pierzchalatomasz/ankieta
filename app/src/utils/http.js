import q from 'q';

export default {
    post: ({ url, data }) => {
        data = `data=${JSON.stringify(data)}`;

        var deferred = q.defer();
        var req = new XMLHttpRequest();

        req.open('POST', url, true);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    var res = JSON.parse(req.responseText);
                    deferred.resolve(res);
                } else {
                    console.log("Błąd podczas ładowania strony\n");
                    deferred.reject('POST error');
                }
            }
        };

        req.send(data);

        return deferred.promise;
    },
    get: ({ url, data }) => {
        var deferred = q.defer();
        var req = new XMLHttpRequest();

        req.open('GET', url, true);

        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    var res = JSON.parse(req.responseText);
                    deferred.resolve(res);
                } else {
                    console.log("Błąd podczas ładowania strony\n");
                    deferred.reject('POST error');
                }
            }
        };

        req.send();

        return deferred.promise;
    }
}