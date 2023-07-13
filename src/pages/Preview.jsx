export default function Preview(props) {
  let fullname = localStorage.getItem('fullName')
  let phone = localStorage.getItem('phoneNumber')
  let tagline = localStorage.getItem('tagline')
  let firstSynopsis = localStorage.getItem('firstWorkExperienceSynopsis');
  let secondSynopsis = localStorage.getItem('secondWorkExperienceSynopsis');
  let thirdSynopsis = localStorage.getItem('thirdWorkExperienceSynopsis');

  let component;
  
  if (props['template']) {
    switch(props['template']) {
      case 1:
        component = <div id="body-element" className="mx-16 bg-slate-300">
        <h1 className="text-2xl">{fullname}</h1>
        <p className="my-4">{phone}</p>
        <p>{tagline}</p>
        <h2 className="text-lg my-4">Work Experience</h2>
        <hr className="border-2 border-gray" />
        <p className="my-8">{firstSynopsis}</p>
        <p className="my-8">{secondSynopsis}</p>
        <p className="my-8">{thirdSynopsis}</p>
      </div>
        break;
      case 2:
        component = <div id="body-element" className="mx-16 bg-white">
        <h1 className="text-2xl">{fullname}</h1>
        <hr className="border-2 border-black" />
        <p className="my-4">{phone}</p>
        <p>{tagline}</p>
        <h2 className="text-lg my-4">Work Experience</h2>
        <hr className="border-2 border-black" />
        <p className="my-8">{firstSynopsis}</p>
        <p className="my-8">{secondSynopsis}</p>
        <p className="my-8">{thirdSynopsis}</p>
      </div>
        break;
      case 3:
        component = <div id="body-element" className="mx-16 bg-teal-400">
        <h1 className="text-2xl text-black">{fullname}</h1>
        <p className="my-4 text-black">{phone}</p>
        <p className="text-black">{tagline}</p>
        <h2 className="text-lg my-4 text-black">Work Experience</h2>
        <hr className="border-2 border-gray text-black" />
        <ul>
          <li className="text-black my-2">{firstSynopsis}</li>
          <li className="text-black my-2">{secondSynopsis}</li>
          <li className="text-black my-2">{thirdSynopsis}</li>
        </ul>
      </div>
        break;
    }
  } else {
    component = <div id="body-element" className="mx-16">
    <h1 className="text-2xl">{fullname}</h1>
    <p className="my-4">{phone}</p>
    <p>{tagline}</p>
    <h2 className="text-lg my-4">Work Experience</h2>
    <hr className="border-2 border-black mx-48" />
    <p className="my-8">{firstSynopsis}</p>
    <p className="my-8">{secondSynopsis}</p>
    <p className="my-8">{thirdSynopsis}</p>
  </div>
  }

  return (
   component
  );
}
