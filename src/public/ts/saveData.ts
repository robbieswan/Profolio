import { type profile } from "./types.js";

function main() {
    document.getElementById('submit-button')!.addEventListener('click', saveInputData);
}

function saveInputData() {
    const data: profile = createProfile();
    localStorage.setItem('input-data', JSON.stringify(data));
    window.open('/styling', '_self');
}

function createProfile(): profile {

    const nameInput = document.getElementById('first_name1') as HTMLInputElement;
    const middleInitialInput = document.getElementById('middle_initial1') as HTMLInputElement;
    const lastNameInput = document.getElementById('last_name1') as HTMLInputElement;
    const primaryObjectiveInput = document.getElementById('objective1') as HTMLInputElement;

    const profile: profile = {
        name: `${nameInput.value} ${middleInitialInput.value} ${lastNameInput.value}`,
        title: '',
        bio: '',
        headshotUrl: '',
        skills: [],
        experience: [],
        education: [],
    };

    // Set contact information
    profile.title = primaryObjectiveInput.value;

    // Set contact information
    profile.bio = '';

    // Set contact information
    profile.headshotUrl = '';

    // Set skills
    for (let i = 1; i <= 9; i++) {
        const skillInput = document.getElementById(`skill${i}`) as HTMLInputElement;
        if (skillInput.value) {
            profile.skills.push(skillInput.value);
        }
    }

    // Set education
    const schoolNameInput = document.getElementById('school_name1') as HTMLInputElement;
    const schoolLocationInput = document.getElementById('school_location1') as HTMLInputElement;
    const degreeInput = document.getElementById('degree1') as HTMLInputElement;
    const majorInput = document.getElementById('major1') as HTMLInputElement;
    const minorInput = document.getElementById('minor1') as HTMLInputElement;
    const gpaInput = document.getElementById('gpa1') as HTMLInputElement;
    const graduationDateInput = document.getElementById('graduation_date1') as HTMLInputElement;

    const education: {
        degree: string,
        institution: string,
        duration: string,
        description: string
    } = {
        degree: degreeInput.value,
        institution: `${schoolNameInput.value}, ${schoolLocationInput.value}`,
        duration: `${graduationDateInput.value}`,
        description: `Major: ${majorInput.value}, Minor: ${minorInput.value}, GPA: ${gpaInput.value}`,
    };

    profile.education.push(education);

    // Set work experience
    for (let i = 1; i <= 3; i++) {
        const companyInput = document.getElementById(`company_name${i}`) as HTMLInputElement;
        const positionInput = document.getElementById(`job_title${i}`) as HTMLInputElement;
        const startDateInput = document.getElementById(`start_date${i}`) as HTMLInputElement;
        const endDateInput = document.getElementById(`end_date${i}`) as HTMLInputElement;
        const descriptionInput = document.getElementById(`job_description${i}`) as HTMLInputElement;

        if (companyInput.value && positionInput.value && startDateInput.value && endDateInput.value && descriptionInput.value) {
            const experience: {
                company: string,
                position: string,
                duration: string,
                description: string
            } = {
                company: companyInput.value,
                position: positionInput.value,
                duration: `${startDateInput.value} - ${endDateInput.value}`,
                description: descriptionInput.value,
            };

            profile.experience.push(experience);
        }
    }

    return profile;
}

main();