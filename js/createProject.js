function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    console.dir(e);
    var title = e.srcElement[0].value;
    var numMembers = e.srcElement[1].value;
    var selectedSkillsHTML = e.srcElement[2].selectedOptions;
    var skills = Object.keys(selectedSkillsHTML).map(function(key, index) {
        return selectedSkillsHTML[key].value;
    });
    var description = e.srcElement[3].value;
    var budget = e.srcElement[4].value;

    var project = {
        "title": title,
        "decription": description,
        "numMembers": numMembers,
        "skills": skills,
        "budget": budget
    };

    // TODO: send Project to server.
    console.dir(project);
   
    // You must return false to prevent the default form behavior
    return false;
}

var form = document.getElementById('createProjectForm');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}