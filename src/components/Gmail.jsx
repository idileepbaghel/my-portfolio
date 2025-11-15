import { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    subject: "",
    description: "",
    social: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration
    const serviceID = 'service_ou7b7hs'; // Replace with your service ID
    const templateID = 'template_tywrq8b'; // Replace with your template ID
    const publicKey = 'idPs9Xe0SXgdVc6yi'; // Replace with your public key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.gmail,
      subject: formData.subject,
      message: formData.description,
      social_link: formData.social || 'Not provided',
      to_email: 'dileepbdn1598@gmail.com'
    };

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('SUCCESS!', response.status, response.text);
      alert("✅ Message sent successfully! I'll get back to you soon.");
      
      // Clear form
      setFormData({
        name: "",
        gmail: "",
        subject: "",
        description: "",
        social: "",
      });
    } catch (error) {
      console.error('FAILED...', error);
      alert("❌ Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" style={{
      padding: '80px 20px',
      backgroundColor: '#0f172a',
      color: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        backgroundColor: '#1e293b',
        padding: '40px',
        borderRadius: '20px',
        // boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
      }}>

        <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "40px" }}>Connect With Me</h2>

        <form onSubmit={sendMail} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Name + Email Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#334155'}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                Your Gmail
              </label>
              <input
                type="email"
                name="gmail"
                placeholder="Enter your gmail"
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#334155'}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Message Subject"
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#f8fafc',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#334155'}
            />
          </div>

          {/* Message */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
              Message
            </label>
            <textarea
              name="description"
              placeholder="Type your message..."
              rows="5"
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#f8fafc',
                fontSize: '0.95rem',
                resize: 'vertical',
                fontFamily: 'inherit',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#334155'}
            ></textarea>
          </div>

          {/* Social Link */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
              Social Link (optional)
            </label>
            <input
              type="text"
              name="social"
              placeholder="https://yourprofile.com"
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#f8fafc',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#334155'}
            />
          </div>

          {/* Terms */}
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '10px' }}>
            <input
              type="checkbox"
              required
              style={{
                width: '18px',
                height: '18px',
                marginTop: '2px',
                accentColor: '#3b82f6',
                cursor: 'pointer'
              }}
            />
            <span style={{ fontSize: '0.9rem', userSelect: 'none' }}>
              I agree with the <a href="#" style={{ color: '#06b6d4', textDecoration: 'none' }}>terms and conditions</a>.
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginTop: '10px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;