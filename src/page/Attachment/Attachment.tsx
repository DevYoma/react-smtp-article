/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { smtpexpressClient } from "../../services/smtp";

const Attachment = () => {
    const [email, setEmail] = useState("");
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState(false);

    const handleChange = (event: any) => {
        setFile(event.target.files?.[0])
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if(!file) return;
        setLoading(true);
        // console.table({ email, file });

        try {
            await smtpexpressClient.sendApi.sendMail({
              subject: "Attachment Email",
              message: "Please find the attachment",
              sender: {
                name: "SMTP Article by DevYoma",
                email: import.meta.env.VITE_SMTP_PROJECT_SENDER_EMAIL,
              },
              recipients: {
                email: email,
              },
              attachments: [file]
              //   attachments: ["https://docs.google.com/document/d/1y4Ck3UCScNJfeB0R0OrO5krXew0py2HPQ1ODg9i_DR8/"]
              // attachments: [
              //   "https://firebasestorage.googleapis.com/v0/b/nfcs-1e729.appspot.com/o/IMG_20231008_125256_043.jpg?alt=media&token=d1f17f98-ed50-4a62-9357-dda16e0c5999",
              // ],
            });

             // Notify user of successful submission
            alert("Please check your email to view the sent message.");
            setLoading(false);

        } catch (error) {
            console.error("Error sending email:", error);
            alert("Oops! Something went wrong. Please try again later.");
        }
    }
  return (
    <div className="app">
      <h2 className="" title="documents, images and more">Attachment Email Form</h2>
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
          <label htmlFor="message">File Attachment: documents, images and more</label> <br />
          <input 
            type="file" 
            onChange={handleChange}
            // required
        />
        </div>

        <button>Send Email 🚀</button>
      </form>
    </div>
  );
}

export default Attachment