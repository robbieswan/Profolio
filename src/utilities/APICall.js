// import fs from 'fs'

import axios from 'axios';
// Read the resume text file
// const resume = fs.readFileSync('resume.txt', 'utf-8');

// Function to send a request to the OpenAI API

// export function testFunc() {
//   localStorage.setItem('fullName', 'Tyler Shellman');
//   localStorage.setItem('phoneNumber', '123-456-7890');
//   localStorage.setItem(
//     'tagline',
//     'Innovative software engineer with a knack for streamlining processes and delivering exceptional user experiences. Adept at project management, problem-solving, and collaboration, specializing in JavaScript, Python, and Kotlin. From simplifying complex systems to automating workflows, I create efficient solutions that drive success.'
//   );
//   localStorage.setItem(
//     'firstWorkExperienceSynopsis',
//     'As a Project Manager at BYU-Idaho Support Center, I spearheaded the development of a prototype that simplified contact recording and reporting for multiple unrelated concerns, improving efficiency and data accuracy. Through effective project delegation, I enabled team members to handle 5-7 projects of varying complexity and priority, ensuring successful outcomes. Additionally, I demonstrated strong leadership by interviewing and selecting top-notch candidates for Systems Developer positions while effectively managing expectations and project scope with various stakeholders.'
//   );
//   localStorage.setItem(
//     'secondWorkExperienceSynopsis',
//     'As a Systems Developer at BYU-Idaho Support Center, I streamlined complex processes utilized by contact agents, resulting in improved maintainability and reporting. By identifying and implementing solutions, I significantly reduced the loss of contact data and successfully automated appointment scheduling for the Support call center and Financial Aid Department. Additionally, through effective communication and collaboration, I built positive relationships with team members and stakeholders, enhancing overall productivity and collaboration within the organization.'
//   );
//   localStorage.setItem(
//     'thirdWorkExperienceSynopsis',
//     'During my tenure as a Software Engineer Intern at the Church of Jesus Christ Information & Communication Services, I delivered impactful software solutions to enhance the experience of thousands of students. I played a key role in creating and executing tests using C# and NUnit for over 300 API endpoints, ensuring the reliability and functionality of critical systems used by Pathway Administrators. Additionally, I wrote automation scripts that facilitated the seamless migration of multiple software solutions to a Continuous Integration and Continuous Deployment pattern, optimizing development processes.'
//   );
// }

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API,
});

const openai = new OpenAIApi(configuration);


export async function findFullName(resume) {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Based on my resume:\n${resume}\nPlease find and output my full name.`,
      max_tokens: 100,
    });
    const tagline = completion.data.choices[0].text.trim();
    localStorage.setItem('fullName', tagline);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function findPhoneNumber(resume) {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Based on my resume:\n${resume}\nPlease find and output my phone number.`,
      max_tokens: 100,
    });
    const tagline = completion.data.choices[0].text.trim();
    localStorage.setItem('phoneNumber', tagline);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function generateTagline(resume) {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Based on my resume:\n${resume}\nGive me a 1 sentance, 5 word tagline that would describe who I am and what I do extremely well to a potential employer without my name included.`,
      max_tokens: 100,
    });
    const tagline = completion.data.choices[0].text.trim();
    localStorage.setItem('tagline', tagline);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function generateFirstWorkExperienceSynopsis(resume) {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Based on my resume:\n${resume}\nOnly focus on my first listed work experience. From this first work experience, write a 3 sentence synopsis describing what I did, including the impact I had with the most important details that would sound great to a potential hiring manager.`,
      max_tokens: 100,
    });
    const tagline = completion.data.choices[0].text.trim();
    localStorage.setItem('firstWorkExperienceSynopsis', tagline);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function generateSecondWorkExperienceSynopsis(resume) {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Based on my resume:\n${resume}\nOnly focus on my second listed work experience. From this second work experience, write a 3 sentence synopsis describing what I did, including the impact I had with the most important details that would sound great to a potential hiring manager.`,
      max_tokens: 100,
    });
    const tagline = completion.data.choices[0].text.trim();
    localStorage.setItem('secondWorkExperienceSynopsis', tagline);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function generateThirdWorkExperienceSynopsis(resume) {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Based on my resume:\n${resume}\nOnly focus on my third listed work experience. From this third work experience, write a 3 sentence synopsis describing what I did, including the impact I had with the most important details that would sound great to a potential hiring manager.`,
      max_tokens: 100,
    });
    const tagline = completion.data.choices[0].text.trim();
    localStorage.setItem('thirdWorkExperienceSynopsis', tagline);
  } catch (error) {
    console.error('Error:', error);
  }
}

// // Call the functions
// findFullName();
// findPhoneNumber();
// generateTagline();
// generateFirstWorkExperienceSynopsis();
// generateSecondWorkExperienceSynopsis();
// // generateThirdWorkExperienceSynopsis();
