export default function () {
    var mainContainer = document.querySelector('.main-container');
    
    var isValid = true;

    var map = {
        name: '/',
        singleChoiceQuestion: '/single-choice-question',
        multiChoiceQuestion: '/multi-choice-question'
    };

    function showNotification() {
        var notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerText = 'Nie odpowiedziałeś na to pytanie!';

        document.querySelector('body').appendChild(notification);

        setTimeout(() => {
            document.querySelector('body').removeChild(notification);
        }, 1000);
    }

    for (var key in map) {
        if (!localStorage[key]) {
            isValid = false;
            State.go(map[key]);
            showNotification();

            return;
        }
    }

    return isValid;
}