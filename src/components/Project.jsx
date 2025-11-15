const projects = [
  { title: "AI Powered Post Scheduler", description: "Engineered an AI-driven LinkedIn post scheduling platform using Flask, MySQL, and LinkedIn OAuth 2.0, enabling seamless authentication, post creation, and automated content publishing. Integrated Google Gemini API for intelligent text generation, allowing users to craft day-wise professional posts optimized for engagement.", link: "https://github.com/idileepbaghel/post-schedular" },
  { title: "NextJS Auth App", description: "Engineered a secure authentication platform using Next.js, NextAuth.js, and JWT, implementing complete user login, registration, and session management with middleware-based route protection and environment variable encryption for sensitive credentials.", link: "https://github.com/idileepbaghel/nextjs-auth" },
  { title: "Ez-GST: GST Calculator", description: "Built and deployed a full-stack GST Calculator using Python (Flask) with Bootstrap UI, integrating Jinja2 for server-side rendering to deliver responsive and dynamic invoice and tax calculation workflows. Implemented QR code scanning with Python libraries to auto-fetch GST details from invoices, and developed bill generation & printing functionality using dynamic Flask routes and templates. Designed and optimized MySQL relational schemas to handle user transactions, CRUD operations, and tax records, ensuring secure data persistence with parameterized SQL queries to prevent injection attacks.", link: "https://gst-calc.onrender.com/" },
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
