function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    console.dir(e);
    var email = e.srcElement[0].value;
    var password = e.srcElement[1].value;
    var name = e.srcElement[2].value;

    var user = {
        "email": email,
        "password": password,
        
   
    };

    // TODO: send user to server.
    console.dir(user);
    
   
   
    // You must return false to prevent the default form behavior
    return false;
}

var form = document.getElementById('createUser');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}