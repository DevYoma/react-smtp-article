# React SMTP Express

**Tired of setting up a backend just to send emails from your React application?** SMTP Express is here to save the day! This powerful library allows you to send emails directly from your frontend code, eliminating the need for a complex backend server.

For a detailed explanation of SMTP Express and its functionalities, refer to my comprehensive article guide: [Send Emails in your React JS App with SMTP Express](https://dev.to/devyoma/send-emails-in-your-react-js-app-with-smtp-express-1664).

This repository provides a comprehensive guide and code examples to get you started with using SMTP Express in your React projects. Leverage the power of front-end email sending and streamline your development workflow!

## Steps to Clone the `react-smtp-express-article` Repository to a Local Machine

## Prerequisites

- **Git**: Ensure Git is installed on your machine. You can download it from [Git](https://git-scm.com/).
- **Node.js**: Download and install Node.js from the official website: [Node.js](https://nodejs.org/en).

## Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone the repository. Replace `<your-username>` with your GitHub username:

    ```bash
    git clone https://github.com/<your-username>/react-smtp-express-article.git
    ```

## Navigate to the Directory

3. Once the cloning process finishes, navigate to the newly created directory using this command:

    ```bash
    cd react-smtp-express-article
    ```

## Install Dependencies

4. Within the project directory, install the required dependencies using npm:

    ```bash
    npm install
    ```
    
## Set Up a Project on the SMTP Express Platform

To use SMTP Express, you need to set up a project on the SMTP Express platform. Here are the basics:

1. Create an account or log in to the [SMTP Express platform](https://smtpexpress.com/).
2. Create a new project.
3. Get the required keys for your project.

For detailed instructions on setting up a project, please refer to the [section of my article](https://dev.to/devyoma/send-emails-in-your-react-js-app-with-smtp-express-1664#project-setup) where I explain this process.

## Set Up Environment Variables

To use SMTP Express, you need to generate some keys on the SMTP Express platform and add them to your environment variables.

- **projectId**: `VITE_SMTP_PROJECT_ID`
- **projectSecret**: `VITE_SMTP_PROJECT_SECRET`

These keys will be generated on the SMTP Express platform. Add them to the `smtp.ts` file located in the appropriate folder.

Another important environment variable needed for the project is:

- **Project Sender Email**: `VITE_SMTP_PROJECT_SENDER_EMAIL`

This variable is located in the `App.tsx` file.

For more details on generating these keys and setting up the environment variables, please refer to the section of the [article](https://dev.to/devyoma/send-emails-in-your-react-js-app-with-smtp-express-1664#apiKey) where I discuss using React with SMTP Express.

## Run the Application Locally

5. To run the application locally, use the following command:

    ```bash
    npm run dev
    ```

6. The server will start and the application will be available at `http://localhost:5173`.

By following these steps, you'll have a local copy of the `react-smtp-express-article` repository with all the necessary dependencies installed. You can now see SMTP Express in action and refer to the codebase as documentation for implementing it in your own projects.
