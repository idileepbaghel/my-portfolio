import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";

const Contact = () => (
  <section className="contact container" id="contact">
    <div>
      <p style={{ marginBottom: "20px" }}>© 2025 Dileep Baghel. All rights reserved.</p>

      <a data-tooltip-id="github" href="https://github.com/idileepbaghel" target="_blank">
        <FaGithub className="contact-icon" />
      </a>
      <ReactTooltip id="github" place="top" content="GitHub" />

      <a data-tooltip-id="linkedin" href="https://linkedin.com/in/idileepbaghel" target="_blank">
        <FaLinkedin className="contact-icon" />
      </a>
      <ReactTooltip id="linkedin" place="top" content="LinkedIn" />

      <a data-tooltip-id="instagram" href="https://instagram.com/idileepbaghel" target="_blank">
        <FaInstagram className="contact-icon" />
      </a>
      <ReactTooltip id="instagram" place="top" content="Instagram" />
    </div>
  </section>
);

export default Contact;
