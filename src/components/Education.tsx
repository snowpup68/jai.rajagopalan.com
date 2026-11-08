const education = [
  { year: "2010", credential: "Certificate in Business Project Management", where: "New York University" },
  { year: "1990", credential: "Bachelor of Engineering, Electronics", where: "Bangalore University" },
  { year: "1988", credential: "Diplôme Supérieur, Littérature", where: "Alliance Française, Bangalore" },
];

export default function Education() {
  return (
    <section id="education">
      <p className="eyebrow">04 — Education</p>
      <h2 className="section-title">Education</h2>
      <ul className="edu">
        {education.map((e) => (
          <li key={e.credential}>
            <span className="edu-when">{e.year}</span>
            <span>
              <strong>{e.credential}</strong>
              <span className="edu-where">{e.where}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
