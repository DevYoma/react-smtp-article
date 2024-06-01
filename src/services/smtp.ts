// npm install smtpexpress
import { createClient } from "smtpexpress";

export const smtpexpressClient = createClient({
  projectId: import.meta.env.VITE_SMTP_PROJECT_ID,
  // projectId: "xxxxxxxxx" 👈put your ProjectId here
  projectSecret: import.meta.env.VITE_SMTP_PROJECT_SECRET
  // projectSecret: "xxxxxxx" 👈put your ProjectSecret here
});
  