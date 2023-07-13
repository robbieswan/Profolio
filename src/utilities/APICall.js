// import fs from 'fs'

import axios from 'axios';
// Read the resume text file
// const resume = fs.readFileSync('resume.txt', 'utf-8');

// Function to send a request to the OpenAI API

export async function testFunc(text) {
  console.log(text);
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
