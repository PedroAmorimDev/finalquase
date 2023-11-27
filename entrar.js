const form = document.querySelector("#formularioEntrar");

form.addEventListener("submit", function validacao(event) {
    event.preventDefault();

    let hasErrors = false;

    const emailentrar = document.getElementById('emaillogin').value;
    const senhaentrar = document.getElementById('senhalogin').value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!emailRegex.test(emailentrar)) {
        document.getElementById('error-required-emailvalidoentrar').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-emailvalidoentrar').style.display = "none";
    }

    if (!emailentrar) {
        document.getElementById('error-required-emaillogin').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-emaillogin').style.display = "none";
    }

    if (!senhaentrar) {
        document.getElementById('error-required-senhalogin').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhalogin').style.display = "none";
    }

    if (senhaentrar.length < 8) {
        document.getElementById('error-required-senhalogin8').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhalogin8').style.display = "none";
    }

    if (!hasErrors) {
        document.getElementById('sucessoLOGIN').style.display = "block";
    }
})
