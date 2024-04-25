//Show & Hide passwords
function showPassword1() {
    var x = document.getElementById("sifre1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function showPassword2() {
    var x = document.getElementById("sifre2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

