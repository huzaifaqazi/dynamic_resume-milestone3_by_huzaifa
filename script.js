document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    // Gather dynamic education entries
    var educationEntries = Array.from(document.getElementsByClassName('education'))
        .map(function (input) { return input.value; })
        .filter(function (entry) { return entry !== ''; });
    // Gather dynamic skills entries
    var skillEntries = Array.from(document.getElementsByClassName('skill'))
        .map(function (input) { return input.value; })
        .filter(function (entry) { return entry !== ''; });
    // Gather dynamic experience entries
    var experienceEntries = Array.from(document.getElementsByClassName('experience'))
        .map(function (textarea) { return textarea.value; })
        .filter(function (entry) { return entry !== ''; });
    // Create resume output
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Father's Name:</strong> ").concat(fatherName, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(educationEntries.join('<br>'), "</p>\n        <h3>Skills</h3>\n        <p>").concat(skillEntries.join('<br>'), "</p>\n        <h3>Experience</h3>\n        <p>").concat(experienceEntries.join('<br>'), "</p>\n    ");
});
// Add more education
document.getElementById('addEducation').addEventListener('click', function () {
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'education';
    newInput.placeholder = 'Add education';
    document.getElementById('educationContainer').appendChild(newInput);
});
// Add more skills
document.getElementById('addSkill').addEventListener('click', function () {
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'skill';
    newInput.placeholder = 'Add skill';
    document.getElementById('skillsContainer').appendChild(newInput);
});
// Add more experience
document.getElementById('addExperience').addEventListener('click', function () {
    var newTextarea = document.createElement('textarea');
    newTextarea.className = 'experience';
    newTextarea.rows = 2;
    newTextarea.placeholder = 'Add experience';
    document.getElementById('experienceContainer').appendChild(newTextarea);
});
