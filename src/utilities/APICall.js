// import fs from 'fs'

import axios from 'axios';
// Read the resume text file
// const resume = fs.readFileSync('resume.txt', 'utf-8');

// Function to send a request to the OpenAI API

export function testFunc() {
  localStorage.setItem('fullName', 'Tyler Shellman');
  localStorage.setItem('phoneNumber', '123-456-7890');
  localStorage.setItem(
    'tagline',
    'Innovative software engineer with a knack for streamlining processes and delivering exceptional user experiences. Adept at project management, problem-solving, and collaboration, specializing in JavaScript, Python, and Kotlin. From simplifying complex systems to automating workflows, I create efficient solutions that drive success.'
  );
  localStorage.setItem(
    'firstWorkExperienceSynopsis',
    'As a Project Manager at BYU-Idaho Support Center, I spearheaded the development of a prototype that simplified contact recording and reporting for multiple unrelated concerns, improving efficiency and data accuracy. Through effective project delegation, I enabled team members to handle 5-7 projects of varying complexity and priority, ensuring successful outcomes. Additionally, I demonstrated strong leadership by interviewing and selecting top-notch candidates for Systems Developer positions while effectively managing expectations and project scope with various stakeholders.'
  );
  localStorage.setItem(
    'secondWorkExperienceSynopsis',
    'As a Systems Developer at BYU-Idaho Support Center, I streamlined complex processes utilized by contact agents, resulting in improved maintainability and reporting. By identifying and implementing solutions, I significantly reduced the loss of contact data and successfully automated appointment scheduling for the Support call center and Financial Aid Department. Additionally, through effective communication and collaboration, I built positive relationships with team members and stakeholders, enhancing overall productivity and collaboration within the organization.'
  );
  localStorage.setItem(
    'thirdWorkExperienceSynopsis',
    'During my tenure as a Software Engineer Intern at the Church of Jesus Christ Information & Communication Services, I delivered impactful software solutions to enhance the experience of thousands of students. I played a key role in creating and executing tests using C# and NUnit for over 300 API endpoints, ensuring the reliability and functionality of critical systems used by Pathway Administrators. Additionally, I wrote automation scripts that facilitated the seamless migration of multiple software solutions to a Continuous Integration and Continuous Deployment pattern, optimizing development processes.'
  );
}

async function askOpenAI(prompt) {
  const url = 'https://api.openai.com/v1/models/text-davinci-003';
  const oldUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  try {
    const response = await axios.post(
      url,
      {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,
        top_p: 1.0,
        n: 1,
        stop: '\n',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Prompt 0: Find and output full name
export async function findFullName(resume) {
  const prompt = `Based on my resume:\n${resume}\nPlease find and output my full name.`;
  const response = await askOpenAI(prompt);
  console.log(response);
  const fullName = response;

  // Save the full name in localStorage
  localStorage.setItem('fullName', JSON.stringify(fullName));
}

// Prompt 0.1: Find and output phone number
export async function findPhoneNumber(resume) {
  const prompt = `Based on my resume:\n${resume}\nPlease find and output my phone number.`;
  const response = await askOpenAI(prompt);
  const phoneNumber = response;

  // Save the phone number in localStorage
  localStorage.setItem('phoneNumber', JSON.stringify(phoneNumber));
}

// Prompt 1: Generate tagline
export async function generateTagline(resume) {
  const prompt = `Based on my resume:\n${resume}\nGive me a tagline that would describe who I am and what I do extremely well to a potential employer.`;
  const response = await askOpenAI(prompt);
  const tagline = response;

  // Save the tagline in localStorage
  localStorage.setItem('tagline', JSON.stringify(tagline));
}

// Prompt 2: First work experience synopsis
export async function generateFirstWorkExperienceSynopsis(resume) {
  const prompt = `Based on my resume:\n${resume}\nOnly focus on my first listed work experience. From this first work experience, write a 3 sentence synopsis describing what I did, including the impact I had with the most important details that would sound great to a potential hiring manager.`;
  const response = await askOpenAI(prompt);
  const synopsis = response;

  // Save the first work experience synopsis in localStorage
  localStorage.setItem('firstWorkExperienceSynopsis', JSON.stringify(synopsis));
}

// Prompt 3: Second work experience synopsis
export async function generateSecondWorkExperienceSynopsis(resume) {
  const prompt = `Based on my resume:\n${resume}\nOnly focus on my second listed work experience. From this second work experience, write a 3 sentence synopsis describing what I did, including the impact I had with the most important details that would sound great to a potential hiring manager.`;
  const response = await askOpenAI(prompt);
  const synopsis = response;

  // Save the second work experience synopsis in localStorage
  localStorage.setItem(
    'secondWorkExperienceSynopsis',
    JSON.stringify(synopsis)
  );
}

// Prompt 4: Third work experience synopsis
export async function generateThirdWorkExperienceSynopsis(resume) {
  const prompt = `Based on my resume:\n${resume}\nOnly focus on my third listed work experience. From this third work experience, write a 3 sentence synopsis describing what I did, including the impact I had with the most important details that would sound great to a potential hiring manager.`;
  const response = await askOpenAI(prompt);
  const synopsis = response;

  // Save the third work experience synopsis in localStorage
  localStorage.setItem('thirdWorkExperienceSynopsis', JSON.stringify(synopsis));
}

// Call the functions
// findFullName();
// findPhoneNumber();
// generateTagline();
// generateFirstWorkExperienceSynopsis();
// generateSecondWorkExperienceSynopsis();
// generateThirdWorkExperienceSynopsis();
