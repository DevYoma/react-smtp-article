import { useState } from "react";
import "./App.css";
import { smtpexpressClient } from "./services/smtp";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !message) {
      setLoading(false);
      return;
    }
    console.table({ email, message });
    try {
      // Sending an email using SMTP
      await smtpexpressClient.sendApi.sendMail({
        // Subject of the email
        subject: "Confirmation: Email sent successfully",
        // Body of the email
        message: `<h2>${message}</h2>`,
        // Sender's details
        sender: {
          // Sender's name
          name: "SMTP Article by DevYoma",
          // Sender's email address
          email: import.meta.env.VITE_SMTP_PROJECT_SENDER_EMAIL,
          // email: "xxxxxxxxx" 👈put your Project Sender Address here
        },
        // Recipient's details
        recipients: {
          // Recipient's email address (obtained from the form)
          email: email,
        },
      });

      // Notify user of successful submission
      alert("Please check your email to view the sent message.");
      setLoading(false);

      setEmail("");
      setMessage("");
    } catch (error) {
      // Notify user if an error occurs during submission
      alert("Oops! Something went wrong. Please try again later.");
      // You can console.log the error to know what went wrong
      console.log(error);
      setLoading(false);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="app">
      <h2 className="">Email Sending Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailInput">Email:</label> <br />
          <input
            id="emailInput"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="message">Message:</label> <br />
          <textarea
            id="message"
            cols={30}
            rows={10}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button>{loading ? "Loading..." : "Send Email 🚀"}</button>
      </form>
    </div>
  );
}

export default App;
