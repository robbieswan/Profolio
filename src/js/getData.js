
const dataUrl = 'http://localhost:7777/profile';

async function mainGetData() {
    const profileData = await getData();
    populateData(profileData);
}

async function getData(){
    const response = await fetch(dataUrl);
    if (response.ok) {
        const data = await response.json();
        return data.profile;
    } else {
        throw new Error('Unable to get profile');
    }
}

function populateData(data) {
    // img
    let imgElem = document.getElementById('headshot');
    imgElem.src = data.headshotUrl;

    // name
    let nameElem = document.getElementById('name');
    nameElem.textContent = data.name;

    // title
    let titleElem = document.getElementById('title');
    titleElem.textContent = data.title;

    // skills
    let skillsElem = document.getElementById('skills');
    skillsElem.innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join('');

    // experience
    let experienceElem = document.getElementById('experience');
    experienceElem.innerHTML = data.experience
        .map(exp => `<li><strong>${exp.position}</strong> at ${exp.company} (${exp.duration})<br>${exp.description}</li>`)
        .join('');

    // education
    let educationElem = document.getElementById('education');
    educationElem.innerHTML = data.education
        .map(edu => `<li><strong>${edu.degree}</strong> from ${edu.institution} (${edu.duration})<br>${edu.description}</li>`)
        .join('');
}

mainGetData();