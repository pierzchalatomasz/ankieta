export default function ({ prevRoute, field }) {
    if (!field) {
        window.location.hash = prevRoute;
    }
}