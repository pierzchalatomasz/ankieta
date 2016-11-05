export default function () {
    this.prev = null;
    this.current = null;
    
    this.go = (route) => {
        this.prev = window.location.hash; 
        window.location.hash = route;
        this.current = route;
    }
};