export default ({ element, inputs, route }) => {
    element.onclick = (e) => {
        inputs = Array.prototype.slice.call(inputs);
        var checked = inputs.filter(x => x.checked);

        if (checked.length) {
            window.location.hash = route;
            return;
        }

        alert('Nie odpowiedziałeś!');
    };
};