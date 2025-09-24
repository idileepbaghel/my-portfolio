const projects = [
  { title: "Portfolio Website", description: "Personal portfolio built with React & Next.js.", link: "#" },
  { title: "Chat App", description: "Real-time chat application using React & Firebase.", link: "#" },
  { title: "E-commerce App", description: "Full-stack e-commerce project with Node.js backend.", link: "#" },
];

const Projects = () => (
  <section className="projects container" id="projects">
    <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "40px" }}>Projects</h2>
    <div className="project-grid">
      {projects.map((p, i) => (
        <div key={i} className="card">
          <h3 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>{p.title}</h3>
          <p>{p.description}</p>
          <a href={p.link} style={{ marginTop: "10px", display: "inline-block" }}>View Project</a>
        </div>
      ))}
    </div>

    {/* <div class="cards">
        <h3>Dileep Baghel</h3>
    </div> */}

  </section>
);

export default Projects;
