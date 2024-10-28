document.getElementById('resumeForm')!.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    // Gather dynamic education entries
    const educationEntries = Array.from(document.getElementsByClassName('education') as HTMLCollectionOf<HTMLInputElement>)
        .map(input => input.value)
        .filter(entry => entry !== '');

    // Gather dynamic skills entries
    const skillEntries = Array.from(document.getElementsByClassName('skill') as HTMLCollectionOf<HTMLInputElement>)
        .map(input => input.value)
        .filter(entry => entry !== '');

    // Gather dynamic experience entries
    const experienceEntries = Array.from(document.getElementsByClassName('experience') as HTMLCollectionOf<HTMLTextAreaElement>)
        .map(textarea => textarea.value)
        .filter(entry => entry !== '');

    // Create resume output
    const resumeOutput = document.getElementById('resumeOutput')!;
    resumeOutput.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Father's Name:</strong> ${fatherName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${educationEntries.join('<br>')}</p>
        <h3>Skills</h3>
        <p>${skillEntries.join('<br>')}</p>
        <h3>Experience</h3>
        <p>${experienceEntries.join('<br>')}</p>
    `;
});

// Add more education
document.getElementById('addEducation')!.addEventListener('click', function() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'education';
    newInput.placeholder = 'Add education';
    document.getElementById('educationContainer')!.appendChild(newInput);
});

// Add more skills
document.getElementById('addSkill')!.addEventListener('click', function() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'skill';
    newInput.placeholder = 'Add skill';
    document.getElementById('skillsContainer')!.appendChild(newInput);
});

// Add more experience
document.getElementById('addExperience')!.addEventListener('click', function() {
    const newTextarea = document.createElement('textarea');
    newTextarea.className = 'experience';
    newTextarea.rows = 2;
    newTextarea.placeholder = 'Add experience';
    document.getElementById('experienceContainer')!.appendChild(newTextarea);
});
