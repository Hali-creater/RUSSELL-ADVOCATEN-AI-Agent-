# Lawsuit Questionnaire AI Agent

This is a web-based chatbot designed to act as a virtual receptionist for a law firm. It guides potential clients through a series of questions to gather initial case information and then helps them send this information to the firm.

## How to Use

Interacting with the chatbot is simple and straightforward:

1.  **Start the Conversation:** Click the "Let's start!" button to begin the questionnaire.
2.  **Answer the Questions:** The chatbot will ask you a series of questions one by one. Type your answer in the message box and click "Send" or press "Enter".
3.  **Review the Summary:** After you have answered all the questions, the chatbot will display a summary of your responses.
4.  **Send to the Firm:** Click the "Send to Firm" button. This will open your default email client with a pre-filled email containing the summary of your answers, ready to be sent to the law firm.
5.  **Call the Firm:** If you prefer to speak to someone directly, you can click the "Call" button at any time to see the firm's phone number.

## How to Install

This chatbot is built with HTML, CSS, and JavaScript and can be easily embedded into any existing website.

1.  **Copy the Files:** Copy the `index.html`, `style.css`, and `script.js` files to a directory on your web server.
2.  **Embed the Chatbot:** You can either link to the `index.html` file directly, or embed it into an existing page using an `<iframe>`:

    ```html
    <iframe src="/path/to/your/chatbot/index.html" width="420" height="500" style="border:none;"></iframe>
    ```
3.  **Customize the Law Firm Data:** To use this chatbot for a different law firm, open the `script.js` file and modify the `lawFirm` object with the new firm's details.

## How It Works & Usage

The purpose of this agent is to automate the initial information-gathering process for a law firm. It acts as a 24/7 virtual receptionist that can qualify leads and collect basic case details, saving time for both the client and the firm's staff.

The agent is built using standard web technologies:

*   **HTML (`index.html`):** Provides the structure and layout of the chatbot interface.
*   **CSS (`style.css`):** Styles the chatbot to look like the provided UI design.
*   **JavaScript (`script.js`):** Contains all the logic for the chatbot's conversation flow. It includes:
    *   A hardcoded list of questions to ask the user.
    *   An object to store the user's answers.
    *   Functions to display messages in the chat window.
    *   Event listeners for the buttons and input field.
    *   A function to generate a `mailto:` link with the conversation summary.
