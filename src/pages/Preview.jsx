export default function Preview() {
  const data = fetch(json);

  return (
    <div>
      <h1>{data.first_name} {data.last_name}</h1>
      <p>{data.middle_name_initial}</p>
      <p>{data.my_descrptn}</p>
      <p>{data.profession}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.address}</p>
      <p>{data.birthday}</p>
      <p>{data.age}</p>
      <p>{data.website}</p>
      <p>{data.personal_summary}</p>
      <p>{data.first_degree}</p>
      <p>{data.first_degree_year}</p>
      <p>{data.first_degree_school}</p>
      <p>{data.second_degree}</p>
      <p>{data.second_degree_year}</p>
      <p>{data.second_degree_school}</p>
      <p>{data.experience_1_title}</p>
      <p>{data.experience_year}</p>
      <p>{data.experience_company}</p>
      <p>{data.experience_address}</p>
      <ul>
        {data.experience_1_bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <p>{data.experience_2_title}</p>
      <p>{data.experience_2_year}</p>
      <p>{data.experience_2_company}</p>
      <p>{data.experience_2_address}</p>
    </div>
  );
}
