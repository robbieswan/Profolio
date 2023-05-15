// Define user data

// Set up local database
const userData = {
    name: "John Smith",
    title: "Web Developer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus sit amet risus convallis tempus. Integer eget velit est. Sed sit amet sapien vitae magna lobortis lacinia.",
    headshotUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    experience: [
      {
        company: "Acme Inc.",
        position: "Web Developer",
        duration: "Jan 2018 - Present",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus sit amet risus convallis tempus."
      },
      {
        company: "XYZ Corp.",
        position: "Junior Developer",
        duration: "Jun 2016 - Dec 2017",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of XYZ",
        duration: "Sep 2012 - May 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus sit amet risus convallis tempus."
      },
      {
        degree: "Master of Science in Software Engineering",
        institution: "University of ABC",
        duration: "Sep 2016 - May 2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]
  };
  


  // Select HTML tags
  const nameTag = document.getElementById("name");
  const titleTag = document.getElementById("title");
  const bioTag = document.getElementById("bio");
  const headshotTag = document.getElementById("headshot");
  const skillsTag = document.getElementById("skills");
  const experienceTag = document.getElementById("experience");
  const educationTag = document.getElementById("education");
  
  // Populate HTML template with user data
  nameTag.innerHTML = userData.name;
  titleTag.innerHTML = userData.title;
  bioTag.innerHTML = userData.bio;
  headshotTag.setAttribute("src", userData.headshotUrl);
  
  // Create a list of skills and append it to the HTML template
  const skillsList = document.createElement("ul");
  userData.skills.forEach(skill => {
    const skillItem = document.createElement("li");
    skillItem.innerHTML = skill;
    skillsList.appendChild(skillItem);
  });
  skillsTag.appendChild(skillsList);
  
  // Create a list of experience and append it to the HTML template
  const experienceList = document.createElement("ul");
  userData.experience.forEach(exp => {
    const expItem = document.createElement("li");
    expItem.innerHTML = `<strong>${exp.position}</strong> at ${exp.company} (${exp.duration})<br>${exp.description}`;
    experienceList.appendChild(expItem);
  });
  experienceTag.appendChild(experienceList);
  
  // Create a list of education and append it to the HTML template
  const educationList = document.createElement("ul");
  userData.education.forEach(edu => {
    const eduItem = document.createElement("li");
    eduItem.innerHTML = `<strong>${edu.degree}</strong> from ${edu.institution} (${edu.duration})<br>${edu.description}`;
    educationList.appendChild(eduItem);
  });
  educationTag.appendChild(educationList);
  