type Role = {
  when: string;
  title: string;
  org: string;
  what?: string;
};

type Era = {
  years: string;
  name: string;
  roles: Role[];
};

const eras: Era[] = [
  {
    years: "2024 —",
    name: "Consulting",
    roles: [
      {
        when: "Mar 2026 —",
        title: "Product Management Consultant",
        org: "Ripple Group, Inc. · Remote",
        what: "Client delivery for agentic AI projects in service businesses — requirements and specifications through to rollout, with agents running real operational workflows.",
      },
      {
        when: "2024 — 2025",
        title: "Software Architect",
        org: "Ripple Group, Inc. · Remote",
        what: "Architectural design and system mapping for porting a core rent-to-own application to AWS. Authored the cloud infrastructure and application architecture documentation guiding deployment, steered an offshore development team day to day, and held the onshore client relationships.",
      },
    ],
  },
  {
    years: "2015 — 2024",
    name: "Education technology and product",
    roles: [
      {
        when: "2023 — 2024",
        title: "Director, IT Services",
        org: "Orbit Future Academy · Jakarta — remote from Bengaluru",
        what: "An educational up-skilling portal, from requirements through launch.",
      },
      {
        when: "2019 — 2023",
        title: "Director of Software Engineering",
        org: "Breakthrough Technologies · Evanston, Illinois",
        what: "Directed the engineering lifecycle for a suite of enterprise educational applications, assessment tools and LMS software. Delivery schedules and budget across concurrent projects; recruited, mentored and supervised developers and QA engineers; stayed in the code through reviews and critical PHP components. Primary technical contact for clients.",
      },
      {
        when: "2019",
        title: "Senior Software Developer",
        org: "ServerCentral Turing Group · Chicago",
        what: "Backend development in PHP.",
      },
      {
        when: "2016 — 2019",
        title: "Senior Principal Engineer",
        org: "Bond, acquired by Newell Brands · New York",
        what: "A high-scale web application for automated gift and handwritten-note delivery — by robots. Architected the backend in Node.js (HapiJS) and designed the MongoDB aggregation pipelines behind the core API. Agile team of five.",
      },
      {
        when: "2015 — 2016",
        title: "Senior Developer",
        org: "Breakthrough Technologies · Evanston, Illinois",
        what: "Technical lead on an online high-school testing platform built on PHP, TAO and Drupal 7. Engineered a business intelligence application for a Fortune 500 pharmaceutical company in Node.js.",
      },
    ],
  },
  {
    years: "2013 — 2015",
    name: "Consulting, coast to coast",
    roles: [
      {
        when: "2013 — 2015",
        title: "Consultant",
        org: "Pacific Gas and Electric · San Francisco Bay Area",
        what: "Hybrid mobile applications for the gas, energy supply and nuclear power plant lines of business. Ten programmers, onshore and offshore.",
      },
      {
        when: "2013",
        title: "Senior / Managing Developer",
        org: "Veritas Health · Greater Chicago",
        what: "Maintenance of a medical publisher's sites — spine-health.com and arthritis-health.com — plus custom Drupal 7 modules and jQuery.",
      },
      {
        when: "2013",
        title: "PHP Technical Lead (Contract)",
        org: "TIAA-CREF · New York",
        what: "Emergency maintenance, reverse engineering, and a replacement for an HR compensation web application.",
      },
    ],
  },
  {
    years: "2008 — 2012",
    name: "New York media",
    roles: [
      {
        when: "2011 — 2012",
        title: "Director of Development",
        org: "American Media · New York",
        what: "Engineering operations for ten high-traffic digital publications — Men's Fitness, Shape, Radar Online among them. Hired and managed eight developers; architected and executed the full system overhaul and database migration of three primary sites from Drupal 6 to Drupal 7.",
      },
      {
        when: "2010 — 2011",
        title: "Lead Developer (Consultant)",
        org: "iVillage, NBC Universal · New York",
        what: "Technical lead for porting the Home & Garden vertical to Drupal 6.",
      },
      {
        when: "2008 — 2009",
        title: "Senior Developer / Manager",
        org: "Innovation Ads · New York",
        what: "Technical and managerial leadership of eight developers. Built a prospect management system in PHP, ExtJS and MySQL.",
      },
      {
        when: "2008",
        title: "PHP Developer (Consultant)",
        org: "Condé Nast · New York",
      },
    ],
  },
  {
    years: "2001 — 2007",
    name: "Chicago, public sector",
    roles: [
      {
        when: "2006 — 2007",
        title: "Assistant Procurement Officer",
        org: "City of Chicago · Department of Procurement Services",
        what: "Project manager for the Online Economic Disclosure Statement system, replacing a paper submission-and-approval process. Gathered requirements, translated them for IT, ran QA and coordinated user acceptance testing. Also built the department's portal — specification library, contract finder, training calendar.",
      },
      {
        when: "2001 — 2006",
        title: "Manager of Web Services",
        org: "Chicago Public Schools · Procurement and Contracts",
        what: "The department's web portal end to end: supplier database, solicitation administration, approval requests, board report finder. Also tested the district's Oracle Financials 11i migration and wrote and delivered the training.",
      },
    ],
  },
  {
    years: "1991 — 2001",
    name: "Where it started",
    roles: [
      {
        when: "1996 — 2001",
        title: "Senior Developer (Consultant)",
        org: "Keystone Consulting Affiliates · for Riverside Publishing, Chicago",
        what: "Desktop software in Visual C++/MFC letting school districts analyse how their students performed on standardized tests, including the Iowa Test of Basic Skills. Then a guidance system helping high schoolers pick a course of study and apply to institutions.",
      },
      {
        when: "1992 — 1995",
        title: "Senior Systems Engineer",
        org: "Siemens · Bombay, and Siemens Nixdorf · Munich",
        what: "Seconded to Munich to build the interface for a Synchronous Digital Hierarchy operating system in X Window/Motif, contributing to the system design and its test and simulation suite. In Bombay, ported SIGRAPH CAD-3D from the Apollo Nexus 3500 to the HP 9000/720.",
      },
      {
        when: "1992",
        title: "Systems Engineer",
        org: "Kirloskar Computer Systems · Bangalore",
        what: "A graphical user interface for testing software, written in C on UNIX with Curses.",
      },
      {
        when: "1991 — 1992",
        title: "Software Trainee",
        org: "Raha-automaattiyhdistys · Espoo, Finland",
        what: "Where it actually began, on 1 August 1991. An interface between the Psion Organiser II and a Printer Products printer, written in OPL-II; then one between a Squirrel data logger and a Sun 3/50, in C under X Window and XView on OpenLook.",
      },
    ],
  },
];

export default function Work() {
  return (
    <section id="work">
      <p className="eyebrow">01 — Work</p>
      <h2 className="section-title">The whole record</h2>
      <p className="section-intro">
        Everything, in order, since 1 August 1991. Hands-on and running teams, alternately,
        throughout. A two-page version of this exists for people in a hurry.
      </p>

      {eras.map((era) => (
        <div className="era" key={era.name}>
          <div className="era-head">
            <span className="era-years">{era.years}</span>
            <h3 className="era-name">{era.name}</h3>
          </div>
          {era.roles.map((role) => (
            <div className="role" key={`${role.org}-${role.when}`}>
              <div className="role-when">{role.when}</div>
              <div>
                <h4>{role.title}</h4>
                <p className="role-org">{role.org}</p>
                {role.what && <p className="role-what">{role.what}</p>}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
