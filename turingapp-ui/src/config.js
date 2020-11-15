export default function() {
    console.log(window.location.host);
    if(window.location.host.indexOf('localhost') > -1) {
        return 'http://localhost:5000';
    } else {
        return 'https://daychecker.herokuapp.com';
    }
}