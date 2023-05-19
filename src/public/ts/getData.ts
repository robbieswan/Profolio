type profile = {
    name: string,
    title: string,
    bio: string,
    headshotUrl: string,
    skills: string[],
    experience: {
            company: string,
            position: string,
            duration: string,
            description: string
        }[],
    education: {
            degree: string,
            institution: string,
            duration: string,
            description: string
        }[],
}

const dataUrl = 'http://localhost:7777/profile';

async function mainGetData() {
    const profileData: profile = await getData();
    populateData(profileData);
}

async function getData(): Promise<profile> {
    const response = await fetch(dataUrl);
    if (response.ok) {
        const data = await response.json();
        return data.profile as profile;
    } else {
        throw new Error('Unable to get profile');
    }
}

function populateData(data: profile) {
    // img
    let imgElem = document.getElementById('headshot')! as HTMLImageElement;
    imgElem.src = data.headshotUrl;

    // name
    let nameElem = document.getElementById('name')!;
    nameElem.textContent = data.name;

    // title
    let titleElem = document.getElementById('title')!;
    titleElem.textContent = data.title;

    // skills
    let skillsElem = document.getElementById('skills')!;
    skillsElem.innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join('');

    // experience
    let experienceElem = document.getElementById('experience')!;
    experienceElem.innerHTML = data.experience
        .map(exp => `<li><strong>${exp.position}</strong> at ${exp.company} (${exp.duration})<br>${exp.description}</li>`)
        .join('');

    // education
    let educationElem = document.getElementById('education')!;
    educationElem.innerHTML = data.education
        .map(edu => `<li><strong>${edu.degree}</strong> from ${edu.institution} (${edu.duration})<br>${edu.description}</li>`)
        .join('');
}

mainGetData();