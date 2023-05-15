// main.js
function changeStyleSheet(styleSheet) {
    const styleLink = document.getElementById('style-link');
    styleLink.href = styleSheet;
  }
// Fetch the profile.json file
fetch('profile.json')
  .then(response => response.json())
  .then(data => {
    // Update the HTML elements with the fetched data
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('headshot').src = data.headshotUrl;
    document.getElementById('bio').textContent = data.bio;

    // Update skills
    const skillsList = document.getElementById('skills');
    data.skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
    });

    // Update experience
    const experienceList = document.getElementById('experience');
    data.experience.forEach(exp => {
      const experienceItem = document.createElement('li');
      experienceItem.innerHTML = `
        <h3>${exp.position}</h3>
        <p>${exp.company}</p>
        <p>${exp.duration}</p>
        <p>${exp.description}</p>
      `;
      experienceList.appendChild(experienceItem);
    });

    // Update education
    const educationList = document.getElementById('education');
    data.education.forEach(edu => {
      const educationItem = document.createElement('li');
      educationItem.innerHTML = `
        <h3>${edu.degree}</h3>
        <p>${edu.institution}</p>
        <p>${edu.duration}</p>
        <p>${edu.description}</p>
      `;
      educationList.appendChild(educationItem);
    });
  })
  .catch(error => console.error('Error:', error));
