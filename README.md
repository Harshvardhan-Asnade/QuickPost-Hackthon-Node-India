# QuickPost Hackathon Node India 
 
 ## Team Name 
 **Algro** 
 
 ## Team Members 
 - Harshvardhan Asnade 
 - Mayank 
 - Om Kumar 
 - Prince Raj 
 
 ## Project Name 
 **QuickPost** 
 
 ## Project Description 
 QuickPost is a lightweight, scalable platform designed for rapid content sharing and discussion. Built for the Hackathon Node India event, our project empowers users to create, post, and interact with content seamlessly. The platform prioritizes speed and simplicity, making it perfect for hackathons, events, and communities that thrive on real-time engagement. 
 
 ### Key Features 
 - **Instant Posting:** Share ideas, updates, and resources instantly. 
 - **Community Interaction:** Like, comment, and connect with fellow participants. 
 - **Scalable Backend:** Node.js-powered backend ensures fast responses even under heavy load. 
 - **Modern UI:** Clean, intuitive interface for effortless navigation. 
 - **AI-Powered Post Generation:** Using the LLama model, users can generate posts automatically. This feature leverages LLM capabilities to assist users in creating meaningful content quickly. 
 
 ## Track Specification 
 This project was submitted under the **Hackathon Node India** track, focusing on real-time applications, collaborative platforms, and scalable backend solutions. 
 
 ## File Structure
```

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v18 or higher)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (comes with Node.js)
- [Git](https://git-scm.com/downloads)
- [Ollama](https://ollama.com/download) (for running local LLM)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Harshvardhan-Asnade/QuickPost-Hackthon-Node-India.git
    cd QuickPost-Hackthon-Node-India/QuickPost
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run Ollama and download the Llama3 model:**
    Ensure your Ollama server is running and download the `llama3` model:
    ```bash
    ollama run llama3
    ```

### Running the Development Server

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  **Open in your browser:**
    The application will be accessible at [http://localhost:3000](http://localhost:3000).


├── .gitignore
├── .idx\
│   ├── dev.nix
│   └── icon.png
├── .modified
├── README.md
├── apphosting.yaml
├── components.json
├── docs\
│   └── blueprint.md
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── src\
│   ├── app\
│   │   ├── api\
│   │   ├── contact\
│   │   ├── dashboard\
│   │   ├── favicon.ico
│   │   ├── features\
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── privacy\
│   │   └── terms\
│   ├── components\
│   │   ├── PlatformPreview.tsx
│   │   └── ui\
│   └── lib\
│       └── utils.ts
├── tailwind.config.ts
└── tsconfig.json
```

