import "./css/DataInput.css"

export default function DataInput() {
   return (
      <div className="inputPage">
      <htmlForm action="submit">
      <section className="input_section profile_section">
         <h3 className="input_header">Profile</h3>
      <label htmlFor="profile_image1">Profile Image</label>
      <input type="file" name="profile_image" id="profile_image1" required></input>
      </section>
      <section className="input_section name_section">
      <h3 className="input_header">Name</h3>
      <label htmlFor="first_name1">First Name</label>
      <input type="text" name="first_name" id="first_name1" required></input>
      <label htmlFor="middle_initial1">Middle Initial</label>
      <input type="text" name="middle_initial" id="middle_initial1"></input>
      <label htmlFor="last_name1">Last Name</label>
      <input type="text" name="last_name" id="last_name1" required></input>
      </section>
      <section className="input_section contact_section">
      <h3 className="input_header">Contact</h3>
      <label htmlFor="email1">Email</label>
      <input type="email" name="email" id="email1" required></input>
      <label htmlFor="phone_number1">Phone Number</label>
      <input type="tel" name="phone_number" id="phone_number1" required></input>
      <label htmlFor="address1">Address</label>
      <input type="text" name="address" id="address1"></input>
      <label htmlFor="city1">City</label>
      <input type="text" name="city" id="city1" required></input>
      <label htmlFor="state1">State</label>
      <input type="text" name="state" id="state1" required></input>
      </section>
      <section className="input_section objectives_section">
         <h3 className="input_header">Objectives</h3>
      <label htmlFor="objective1">Primary Objective</label>
      <input type="text" name="objective" id="objective1" required></input>
      <label htmlFor="objective2">Guiding Objective</label>
      <input type="text" name="objective" id="objective2" required></input>
      <label htmlFor="objective3">Guiding Objective</label>
      <input type="text" name="objective" id="objective3"></input>
      <label htmlFor="objective4">Guiding Objective</label>
      <input type="text" name="objective" id="objective4"></input>
      </section>
      <section className="input_section education_section">
         <h3 className="input_header">Post Secondary Education</h3>
      <label htmlFor="school_name1">School Name</label>
      <input type="text" name="school_name" id="school_name1"></input>
      <label htmlFor="school_location1">School Location</label>
      <input type="text" name="school_location" id="school_location1"></input>
      <label htmlFor="degree1">Degree</label>
      <input type="text" name="degree" id="degree1"></input>
      <label htmlFor="major1">Major</label>
      <input type="text" name="major" id="major1"></input>
      <label htmlFor="minor1">Minor</label>
      <input type="text" name="minor" id="minor1"></input>
      <label htmlFor="gpa1">GPA</label>
      <input type="text" name="gpa" id="gpa1"></input>
      <label htmlFor="graduation_date1">Graduation Date</label>
      <input type="date" name="graduation_date" id="graduation_date1"></input>
      </section>
      <section className="input_section work_experience_section">
         <h3 className="input_header">Work Experience 1</h3>
      <label htmlFor="job_title1">Job Title</label>
      <input type="text" name="job_title" id="job_title1"></input>
      <label htmlFor="start_date1">Start Date</label>
      <input type="date" name="start_date" id="start_date1"></input>
      <label htmlFor="end_date1">End Date</label>
      <input type="date" name="end_date" id="end_date1"></input>
      <label htmlFor="job_description1">Job Description</label>
      <input type="text" name="job_description" id="job_description1"></input>
      <h3 className="input_header">Work Experience 2</h3>
      <label htmlFor="job_title2">Job Title</label>
      <input type="text" name="job_title" id="job_title2"></input>
      <label htmlFor="start_date2">Start Date</label>
      <input type="date" name="start_date" id="start_date2"></input>
      <label htmlFor="end_date2">End Date</label>
      <input type="date" name="end_date" id="end_date2"></input>
      <label htmlFor="job_description2">Job Description</label>
      <input type="text" name="job_description" id="job_description2"></input>
      <h3 className="input_header">Work Experience 3</h3>
      <label htmlFor="job_title3">Job Title</label>
      <input type="text" name="job_title" id="job_title3"></input>
      <label htmlFor="company_name3">Company Name</label>
      <input type="text" name="company_name" id="company_name3"></input>
      <label htmlFor="start_date3">Start Date</label>
      <input type="date" name="start_date" id="start_date3"></input>
      <label htmlFor="end_date3">End Date</label>
      <input type="date" name="end_date" id="end_date3"></input>
      <label htmlFor="job_description3">Job Description</label>
      <input type="text" name="job_description" id="job_description3"></input>
      </section>
      <section className="input_section skills_section">
         <h3 className="input_header">Skills</h3>
      <label htmlFor="skill1">Skill 1</label>
      <input type="text" name="skill" id="skill1" required></input>
      <label htmlFor="skill2">Skill 2</label>
      <input type="text" name="skill" id="skill2" required></input>
      <label htmlFor="skill3">Skill 3</label>
      <input type="text" name="skill" id="skill3" required></input>
      <label htmlFor="skill4">Skill 4</label>
      <input type="text" name="skill" id="skill4"></input>
      <label htmlFor="skill5">Skill 5</label>
      <input type="text" name="skill" id="skill5"></input>
      <label htmlFor="skill6">Skill 6</label>
      <input type="text" name="skill" id="skill6"></input>
      <label htmlFor="skill7">Skill 7</label>
      <input type="text" name="skill" id="skill7"></input>
      <label htmlFor="skill8">Skill 8</label>
      <input type="text" name="skill" id="skill8"></input>
      <label htmlFor="skill9">Skill 9</label>
      <input type="text" name="skill" id="skill9"></input>
      </section>
      <section className="input_section projects_section">
         <h3 className="input_header">Projects</h3>
      <label htmlFor="project_title1">Project 1 Title</label>
      <input type="text" name="project_title" id="project_title1"></input>
      <label htmlFor="project_description1">Project 1 Description</label>
      <input type="text" name="project_description" id="project_description1"></input>
      <label htmlFor="project_link1">Project 1 Link</label>
      <input type="text" name="project_link" id="project_link1"></input>
      <label htmlFor="project_title2">Project 2 Title</label>
      <input type="text" name="project_title" id="project_title2"></input>
      <label htmlFor="project_description2">Project 2 Description</label>
      <input type="text" name="project_description" id="project_description2"></input>
      <label htmlFor="project_link2">Project 2 Link</label>
      <input type="text" name="project_link" id="project_link2"></input>
      <label htmlFor="project_title3">Project 3 Title</label>
      <input type="text" name="project_title" id="project_title3"></input>
      <label htmlFor="project_description3">Project 3 Description</label>
      </section>
      <section className="input_section awards_section">
         <h3 className="input_header">Awards</h3>
      <label htmlFor="award1">Award 1</label>
      <input type="text" name="award" id="award1"></input>
      <label htmlFor="award2">Award 2</label>
      <input type="text" name="award" id="award2"></input>
      <label htmlFor="award3">Award 3</label>
      <input type="text" name="award" id="award3"></input>
      </section>
      <section className="input_section certifications_section">
         <h3 className="input_header">Certifications</h3>
      <label htmlFor="certification1">Certification 1</label>
      <input type="text" name="certification" id="certification1"></input>
      <label htmlFor="certification2">Certification 2</label>
      <input type="text" name="certification" id="certification2"></input>
      <label htmlFor="certification3">Certification 3</label>
      <input type="text" name="certification" id="certification3"></input>
      <label htmlFor="certification4">Certification 4</label>
      <input type="text" name="certification" id="certification4"></input>
      <label htmlFor="certification5">Certification 5</label>
      <input type="text" name="certification" id="certification5"></input>
      </section>
      <section className="input_section volunteer_section">
         <h3 className="input_header">Volunteer Experience</h3>
      <label htmlFor="volunteer_title1">Volunteer Title</label>
      <input type="text" name="volunteer_title" id="volunteer_title1"></input>
      <label htmlFor="volunteer_organization1">Volunteer Organization</label>
      <input type="text" name="volunteer_organization" id="volunteer_organization1"></input>
      <label htmlFor="volunteer_start_date1">Start Date</label>
      <input type="date" name="volunteer_start_date" id="volunteer_start_date1"></input>
      <label htmlFor="volunteer_end_date1">End Date</label>
      <input type="date" name="volunteer_end_date" id="volunteer_end_date1"></input>
      <label htmlFor="volunteer_description1">Volunteer Description</label>
      <input type="text" name="volunteer_description" id="volunteer_description1"></input>
      </section>
      <section className="input_section languages_section">
         <h3 className="input_header">Languages</h3>
      <label htmlFor="language1">Language 1</label>
      <input type="text" name="language" id="language1" required></input>
      <label htmlFor="language2">Language 2</label>
      <input type="text" name="language" id="language2"></input>
      <label htmlFor="language3">Language 3</label>
      <input type="text" name="language" id="language3"></input>
      </section>
      <section className="input_section references_section">
         <h3 className="input_header">References</h3>
      <label htmlFor="reference1">Reference 1</label>
      <input type="text" name="reference" id="reference1" required></input>
      <label htmlFor="reference2">Reference 2</label>
      <input type="text" name="reference" id="reference2" required></input>
      <label htmlFor="reference3">Reference 3</label>
      <input type="text" name="reference" id="reference3" required></input>
      <label htmlFor="reference4">Reference 4</label>
      <input type="text" name="reference" id="reference4"></input>
      <label htmlFor="reference5">Reference 5</label>
      <input type="text" name="reference" id="reference5"></input>
      </section>
   </htmlForm>
   </div>
   );
}