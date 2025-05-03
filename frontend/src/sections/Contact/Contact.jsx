import { useState } from 'react';
import styles from './ContactStyles.module.css';



const Contact = () => {
  const [status, setStatus] = useState(null); // To show success or error message

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  
    try {
      const response = await fetch("https://portfolio-prigeesh-backend.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setStatus("Email sent successfully!");
        e.target.reset(); // Clear form fields
      } else {
        setStatus("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>

      {/* Status message */}
      {status && <p>{status}</p>}
    </section>
  );
}



export default Contact;
