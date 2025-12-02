const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const startBtn = document.getElementById('start-btn');
const callBtn = document.getElementById('call-btn');

const lawFirm = {
  "name": "Russell Advocaten B.V.",
  "head_office": {
    "address": "Antonio Vivaldistraat 6, 1083 HP Amsterdam, Netherlands",
    "post_address": "P.O. Box 87400, 1080 JK Amsterdam, Netherlands"
  },
  "contact": {
    "phone": "+31 (0)20 301 55 55",
    "fax": "+31 (0)20 301 56 78",
    "email": "info@russell.nl",
    "website": "https://www.russell.nl"
  },
  "practice_areas": [
    "Corporate / Business law",
    "Employment law",
    "Real estate & Rent / Lease law",
    "Commercial litigation / Civil procedure / Arbitration",
    "Administrative / Public law",
    "Art, Luxury, Retail & Fashion law",
    "International business & expatriate services"
  ],
  "team": [
    "R.W.L. Russell (managing partner)",
    "P.W.L. Russell (senior partner / litigator)",
    "J. Dop (partner — employment & corporate)",
    "E.J. van der Voort (attorney — employment law)",
    "J. Nooij (attorney)",
    "N. van der Graaf (attorney)"
  ],
  "general_terms": {
    "governing_law": "Netherlands law",
    "contract_effective_when": [
      "written acceptance by partner/shareholder",
      "advance payment received",
      "client signed and returned engagement letter"
    ],
    "no_result_guarantee": true,
    "assignment_by_firm": "firm may assign any qualified person — client cannot demand a specific attorney",
    "liability_limit": {
      "insurance_covered": "up to insurance payout + firm excess",
      "if_no_insurance": "max equal to invoices for matter, capped at EUR 450000",
      "claim_expiry": "12 months after event causing damage"
    },
    "billing": {
      "basis": "hourly rate × hours worked",
      "office_surcharge": "6% of fees",
      "disbursements": "court fees, travel, third-party costs etc.",
      "invoice_frequency": "monthly",
      "VAT": "added as applicable"
    },
    "payment_terms": {
      "due_within": "14 days after invoice",
      "late_payment": {
        "interest": "1% per month from day 15",
        "minimum_collection_fee": "10% of invoice"
      }
    },
    "file_retention": "up to 10 years, then firm may destroy files",
    "communication": {
      "electronic": "emails not encrypted by default — confidentiality not guaranteed",
      "encryption": "available upon client request"
    },
    "dispute_jurisdiction": "Court of Haarlem (Netherlands)"
  }
};

const questions = [
    "May I have your full name, please?",
    "What is the best phone number and email address to reach you?",
    "What type of legal issue are you facing? (e.g., Criminal, Family Law, Traffic, Personal Injury, etc.)",
    "Could you briefly describe what happened?",
    "What is the main outcome you are hoping for?",
    "When did this incident occur?",
    "Are there any upcoming deadlines? (e.g., a court date, a hearing, a response deadline)",
    "How time-sensitive would you say your situation is?",
    "What city and state did this occur in?",
    "Who is the other party involved? (e.g., a specific person, a company, the police).",
    "Have you already spoken to or hired another lawyer about this matter?",
    "May I have the full names of the other parties involved so I can ensure there's no conflict of interest?",
    "What is the best way to schedule a consultation: a phone call or a video meeting?"
];

let currentQuestionIndex = 0;
const userAnswers = {};

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        addMessage(questions[currentQuestionIndex], 'bot');
    } else {
        endConversation();
    }
}

function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userAnswers[questions[currentQuestionIndex]] = message;
        currentQuestionIndex++;
        userInput.value = '';
        setTimeout(askQuestion, 500);
    }
}

function endConversation() {
    let summary = "Thank you for the information. Here is a summary of your responses:\n\n";
    for (const question in userAnswers) {
        summary += `${question}: ${userAnswers[question]}\n`;
    }
    addMessage(summary, 'bot');
    const mailtoLink = `mailto:${lawFirm.contact.email}?subject=New Case Inquiry&body=${encodeURIComponent(summary)}`;
    const sendButton = document.createElement('a');
    sendButton.href = mailtoLink;
    sendButton.textContent = 'Send to Firm';
    sendButton.classList.add('send-to-firm-btn');
    chatWindow.appendChild(sendButton);
}

startBtn.addEventListener('click', () => {
    addMessage("Hello! I'm Ava, your virtual receptionist. I'm here to ask a few questions to understand your situation.", 'bot');
    setTimeout(askQuestion, 1000);
    startBtn.style.display = 'none';
    callBtn.style.display = 'none';
});

sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

callBtn.addEventListener('click', () => {
    addMessage(`You can reach us at ${lawFirm.contact.phone}.`, 'bot');
});
