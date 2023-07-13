export default function Preview() {
  let fullname = localStorage.getItem('fullName')
  let phone = localStorage.getItem('phoneNumber')
  let tagline = localStorage.getItem('tagline')
  let synopsis = localStorage.getItem('synopsis')

  return (
   <div>
      <h1>{fullname}</h1>
      <p>{phone}</p>
      <p>{tagline}</p>
      <p>{synopsis}</p>
     
    </div>
  );
}
