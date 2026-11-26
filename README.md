# AI Code Reviewer

An AI-powered code review tool built with Angular and Google Gemini API. It analyzes Angular code and provides actionable recommendations based on modern Angular development best practices.

## 🚀 Project Overview

AI Code Reviewer uses Google's Gemini AI to review Angular code and identify potential improvements. It focuses on modern Angular patterns, code quality, performance and security.

Users can submit code and receive AI-generated feedback with concise explanations and practical suggestions.

## ✨ Key Features

- **AI-Powered Code Review** – Analyzes code using Google Gemini API.
- **Angular Best Practices** – Reviews code based on modern Angular development standards.
- **Signal Usage** – Recommends Angular Signals over RxJS where appropriate.
- **Standalone Components** – Checks standalone component patterns.
- **Modern Control Flow** – Reviews usage of `@if` and `@for` syntax.
- **Performance & Security** – Identifies potential performance and security improvements.
- **Actionable Feedback** – Provides concise recommendations for code improvement.

## 🛠️ Tech Stack

- Angular
- TypeScript
- Google Gemini API
- @google/generative-ai

## ⚙️ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ketidev/ai-code-reviewer.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure your Gemini API key in the environment configuration:

   ```typescript
   export const environment = {
     GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY',
   };
   ```

4. Start the development server:

   ```bash
   ng serve
   ```

5. Open `http://localhost:4200/` in your browser.

## 🤖 AI Integration

The application integrates Google's Gemini 2.5 Flash model to analyze submitted code using a custom system instruction focused on Angular 21 best practices.

The AI generates structured feedback covering code quality, modern Angular patterns, performance and security.

## 📌 Future Improvements

- Support for multiple programming languages.
- Code quality scoring.
- Highlighting issues directly in the submitted code.
- Exporting code review reports.
