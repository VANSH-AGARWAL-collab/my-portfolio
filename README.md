# Vansh Agarwal - Personal Portfolio Website

A clean, modern, recruiter-friendly personal portfolio website built with semantic HTML5, modern CSS3, and vanilla JavaScript. Designed specifically for **Software Development Engineer (SDE) internships** at companies like Flipkart, Amazon, and leading product organizations.

---

## 🌟 Highlights & Design Principles

- **Recruiter-Friendly Aesthetic:** Clean white professional background, dark navy slate typography (`#0f172a`), and subtle royal blue accents (`#2563eb`).
- **Authentic Engineering Representation:** Highlights genuine coursework, real LeetCode practice in C++, and authentic project implementations inspected directly from codebase repositories.
- **Fast & Dependency-Free:** Zero external frameworks or heavy libraries. Fast first-contentful paint, zero build step required.
- **Accessible & Responsive:** Fully responsive across mobile, tablet, and desktop viewports with WCAG AA contrast compliance and keyboard navigation.
- **No Deceptive Elements:** No fake form submissions, no arbitrary skill percentage meters, and no fabricated metrics or awards.

---

## 📂 Project Structure

```
Portfolio/
├── index.html        # Main semantic HTML structure & metadata
├── style.css         # Modern, responsive CSS styles & design tokens
├── script.js         # Navigation, scrollspy, project filter & copy utilities
└── README.md         # Documentation & deployment guide
```

---

## 🛠️ Included Sections

1. **Header & Navigation:** Sticky blur navbar with branded logo, direct links to sections, and an accessible mobile hamburger drawer.
2. **Hero Section:** Clear headline, aspiring SDE positioning, active education tags, direct CTAs to projects, and GitHub.
3. **About Me:** Credible summary of academic journey at Asansol Engineering College (Class of 2029), focus on algorithmic problem solving, and SDE career aspirations.
4. **Technical Skills:** Categorized into Programming Languages (C++, C, JavaScript, Python), Web Development (HTML5, CSS3, JavaScript, Flask, React), Core CS (DSA, OOP, OS), and Tools (Git, GitHub, SQLite, SerpApi).
5. **Projects:** 5 projects with interactive category filters:
   - **OpportunityShield AI** *(SerpApi India Hackathon 2026)* - Python, Flask, SerpApi, SQLite.
   - **JalRakshak AI (जल रक्षक)** *(Urban Flood Resilience Platform)* - React 19, TypeScript, Tailwind CSS, Leaflet, Node.js REST API.
   - **AI Emotion Detection** - Python, Flask, Hugging Face Transformers.
   - **JavaScript Todo App** - Vanilla JavaScript, HTML5, CSS3, LocalStorage API.
   - **Library Management System** - C Language, File Handling (`stdio.h`).
6. **Education:** Asansol Engineering College, B.Tech CSE (2025–2029), current CGPA: 9.42 / 10.
7. **Problem Solving & Milestones:** Verifiable LeetCode daily problem solving in C++, hackathon architecture, and academic excellence.
8. **Contact & Verification:** Direct email with 1-click copy-to-clipboard, verified GitHub link, LeetCode link, and LinkedIn placeholder.
9. **Footer:** Minimalist dark navy footer with academic credentials and quick links.

---

## 💻 How to Run Locally

### Option 1: Direct File Opening (Easiest)
Simply double-click `index.html` in your file explorer, or right-click `index.html` and choose **Open with > Chrome** (or your preferred browser).

### Option 2: Using Python's Built-in Server
Open PowerShell or Terminal inside the `Portfolio` folder and run:
```powershell
python -m http.server 3000
```
Then visit: [http://localhost:3000](http://localhost:3000)

### Option 3: Using VS Code Live Server
1. Open the `Portfolio` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click **Go Live** in the bottom status bar.

---

## ✏️ Placeholders to Customize Before Final Deployment

Search for these placeholders in `index.html` and replace them with your actual details:

1. **Email Address:**
   - Search for `vansh.agarwal.dev@example.com`
   - Replace with your active professional email address in the `href="mailto:..."`, link text, and `data-copy="..."` attribute.
2. **LinkedIn Profile URL:**
   - Search for `https://linkedin.com/in/vansh-agarwal`
   - Replace with your actual LinkedIn profile link (e.g., `https://linkedin.com/in/your-username`).
3. **Project GitHub Repositories:**
   - **JalRakshak AI:** `https://github.com/VANSH-AGARWAL-collab/JalRakshak-AI` (update once published)
   - **AI Emotion Detection:** `https://github.com/VANSH-AGARWAL-collab/ai-emotion-detection`
   - **JavaScript Todo App:** `https://github.com/VANSH-AGARWAL-collab/javascript-todo-app`
   - **Library Management System:** `https://github.com/VANSH-AGARWAL-collab/library-management-system`

---

## 🚀 Beginner-Friendly Deployment Guide

### Step 1: Uploading to GitHub

1. Open **PowerShell** inside `e:\Portfolio`.
2. Initialize git and commit your files:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Vansh Agarwal portfolio website"
   ```
3. Create a new repository on your GitHub account (`https://github.com/new`):
   - Name: `portfolio` (or `vansh-agarwal-portfolio`)
   - Description: `Personal Portfolio Website of Vansh Agarwal - Computer Science Student`
   - Set it to **Public**.
   - Do **NOT** initialize with a README, .gitignore, or license (you already have them).
4. Link and push your repository:
   ```powershell
   git branch -M main
   git remote add origin https://github.com/VANSH-AGARWAL-collab/portfolio.git
   git push -u origin main
   ```

---

### Step 2: Deploying for Free on Vercel (Recommended)

Vercel provides automatic HTTPS, fast global CDN, and automatic redeployment whenever you push changes to GitHub.

1. Go to [https://vercel.com](https://vercel.com) and log in using your **GitHub account**.
2. Click the **"Add New..."** button and select **"Project"**.
3. Under **"Import Git Repository"**, find your `portfolio` repository and click **"Import"**.
4. In the Project Configuration:
   - **Framework Preset:** Leave as *Other* (it will automatically detect plain HTML).
   - **Root Directory:** `./`
   - **Build and Output Settings:** Leave default (no build command needed for plain HTML).
5. Click **"Deploy"**.
6. Within 15 seconds, Vercel will give you a live URL like `https://vansh-agarwal-portfolio.vercel.app`.

---

### Alternative: Deploying for Free on GitHub Pages

1. In your GitHub repository (`https://github.com/VANSH-AGARWAL-collab/portfolio`), click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Within 1-2 minutes, your website will be live at `https://vansh-agarwal-collab.github.io/portfolio/`.

---

## 📜 License

Created by **Vansh Agarwal**. Feel free to customize and use as your personal portfolio.

