const skillCategories = {
  Languages: [
    { name: "Python", icon: "/icons/python.svg" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
  ],
  Frameworks: [
    { name: "ReactJS", icon: "/icons/react.svg" },
    { name: "NodeJS", icon: "/icons/nodejs.svg" },
    { name: "NextJS", icon: "/icons/nextjs.svg" },
    { name: "Flask", icon: "/icons/flask.webp" },
    { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
    { name: "BootstrapCSS", icon: "/icons/bootstrap.png" },
  ],
  Databases: [
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
  ],
  "Dev Tools": [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "Postman", icon: "/icons/postman.png" },
    { name: "Slack", icon: "/icons/slack.png" },
  ],
};

const Skills = () => (
  <section className="skills container" id="skills">
    <h1>Skills</h1>
    {Object.entries(skillCategories).map(([category, skills], idx) => (
      <div key={idx} className="skill-category">
        <h2 className="category-title">{category}</h2>
        <div className="skills-icons">
          {skills.map((skill, i) => (
            <div key={i} className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Skills;
