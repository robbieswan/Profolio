import { Configuration, OpenAIApi } from 'openai';

const DEBUG_MODE = true;
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API,
});

const openai = new OpenAIApi(configuration);

export async function findFullName(resume) {
  if (DEBUG_MODE) {
    localStorage.setItem('fullName', 'Tyler Shellman');
  } else {
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Based on my resume:\n${resume}\nPlease find and output my full name.`,
        max_tokens: 100,
      });
      const fullName = completion.data.choices[0].text.trim();
      localStorage.setItem('fullName', fullName);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

export async function findPhoneNumber(resume) {
  if (DEBUG_MODE) {
    localStorage.setItem('phoneNumber', '123-456-7890');
  } else {
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Based on my resume:\n${resume}\nPlease find and output my phone number.`,
        max_tokens: 100,
      });
      const phoneNumber = completion.data.choices[0].text.trim();
      localStorage.setItem('phoneNumber', phoneNumber);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

export async function generateTagline(resume) {
  if (DEBUG_MODE) {
    localStorage.setItem(
      'tagline',
      'Detail-oriented software engineer driving innovation through efficient project management and full-stack development.'
    );
  } else {
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
}

export async function generateFirstWorkExperienceSynopsis(resume) {
  if (DEBUG_MODE) {
    localStorage.setItem(
      'firstWorkExperienceSynopsis',
      'As a Project Manager at BYU-Idaho Support Center, I streamlined contact recording and reporting through the development of a prototype, effectively enhancing data accuracy and analysis. By skillfully delegating and prioritizing projects, I empowered my team to manage 5-7 projects simultaneously, fostering a culture of productivity and collaboration. Through meticulous interviewing and selection processes, I contributed to the expansion of the Systems Developer team and adeptly managed project scopes, consistently exceeding expectations and ensuring seamless communication with internal stakeholders.'
    );
  } else {
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Based on my resume:\n${resume}\nOnly focus on my first listed work experience. From this first work experience, write a 3 sentence synopsis describing what I did, including the impact I had with the most important details that would sound great to a potential hiring manager.`,
        max_tokens: 100,
      });
      const firstWorkExp = completion.data.choices[0].text.trim();
      localStorage.setItem('firstWorkExperienceSynopsis', firstWorkExp);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

export async function generateSecondWorkExperienceSynopsis(resume) {
  if (DEBUG_MODE) {
    localStorage.setItem(
      'secondWorkExperienceSynopsis',
      'During my tenure as a Systems Developer at BYU-Idaho Support Center, I played a pivotal role in enhancing operational efficiency by simplifying complex processes for contact agents. By identifying and implementing solutions to minimize data loss, I contributed to a significant improvement in maintainability and reporting accuracy. Additionally, my proactive engagement with team members and stakeholders fostered collaboration, facilitating the successful implementation of mass email processes and the automation of appointment scheduling, which significantly streamlined daily operations for the Support call center and Financial Aid Department.'
    );
  } else {
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Based on my resume:\n${resume}\nOnly focus on my second listed work experience. From this second work experience, write a 3 sentence synopsis describing what I did, including the impact I had with the most important details that would sound great to a potential hiring manager.`,
        max_tokens: 100,
      });
      const secondWorkExp = completion.data.choices[0].text.trim();
      localStorage.setItem('secondWorkExperienceSynopsis', secondWorkExp);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

export async function generateThirdWorkExperienceSynopsis(resume) {
  if (DEBUG_MODE) {
    localStorage.setItem(
      'thirdWorkExperienceSynopsis',
      'As a Software Engineer Intern at the Church of Jesus Christ Information & Communication Services, I delivered impactful software solutions to enhance the experience of thousands of students. By designing and executing tests for over 300 API endpoints using C# and NUnit, I ensured the robustness and reliability of critical systems. Additionally, I played a crucial role in streamlining software deployment processes by creating daily automation routines, contributing to the migration of multiple solutions to a Continuous Integration and Continuous Deployment pattern, and consistently ensuring the smooth operation of software projects.'
    );
  } else {
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Based on my resume:\n${resume}\nOnly focus on my third listed work experience. From this third work experience, write a 3 sentence synopsis describing what I did, including the impact I had with the most important details that would sound great to a potential hiring manager.`,
        max_tokens: 100,
      });
      const thirdWorkExp = completion.data.choices[0].text.trim();
      localStorage.setItem('thirdWorkExperienceSynopsis', thirdWorkExp);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
