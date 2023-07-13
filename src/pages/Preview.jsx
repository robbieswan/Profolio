export default function Preview() {
  let fullname = localStorage.getItem('fullName')
  let phone = localStorage.getItem('phoneNumber')
  let tagline = localStorage.getItem('tagline')
  let firstSynopsis = localStorage.getItem('firstWorkExperienceSynopsis');
  let secondSynopsis = localStorage.getItem('secondWorkExperienceSynopsis');
  let thirdSynopsis = localStorage.getItem('thirdWorkExperienceSynopsis');

  return (
   <div>
      <h1 className="text-xl extraBold">{fullname}</h1>
      <p>{phone}</p>
      <p>{tagline}</p>
      <h2 className="text-lg">Work Experience</h2>
      <hr />
      <p>{firstSynopsis}</p>
      <p>{secondSynopsis}</p>
      <p>{thirdSynopsis}</p>
     
    </div>
  );
}
