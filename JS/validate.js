
const username = document.getElementById('username');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    var re_username = /^[a-zA-Z]{3,}$/;

    if(!re_username.test(username)) {
        document.getElementById('error_username').innerHTML = "ngu";
        return false;
    }
})