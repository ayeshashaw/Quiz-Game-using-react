**Quiz App** 🧠  
A dynamic and interactive quiz application built with React, utilizing the Open Trivia Database API. Users can create quizzes with customizable options, including category, difficulty, and the number of questions.

**Features** 🚀  
- **Setup Quiz Options:** Select a category, difficulty level, and the number of questions.  
- **Dynamic Question Loading:** Fetches questions from the Open Trivia Database.  
- **Real-Time Scoring:** Tracks correct answers and displays the final score.  
- **Responsive Design:** Optimized for both desktop and mobile devices.  

**Tech Stack** 🛠️  
- **Frontend:** React, React Router  
- **Styling:** Custom CSS  
- **API Integration:** Axios  
- **Build Tool:** Vite  

**Installation** ⚙️  
Follow these steps to set up and run the project locally:  

1. **Clone the repository:**  
   ```bash  
   git clone https://github.com/your-username/quiz-app.git  
   cd quiz-app  
   ```  

2. **Install dependencies:**  
   ```bash  
   npm install  
   ```  

3. **Start the development server:**  
   ```bash  
   npm run dev  
   ```  

4. **Open the app in your browser:** Navigate to [http://localhost:5173](http://localhost:5173) to view the app.  

**File Structure** 📂  
```
quiz-app/
├── public/          # Public assets
├── src/
│   ├── components/  # React components (Quiz, SetupQuiz, etc.)
│   ├── App.jsx      # Main App file
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── package.json     # Project dependencies
└── vite.config.js   # Vite configuration
```

**Usage Instructions** 📖  
**Setup Quiz:**  
- Select a category (e.g., General, Sports, History, Art).  
- Choose a difficulty level (Easy, Medium, Hard).  
- Specify the number of questions (1–50).  

**Take the Quiz:**  
- Read the displayed question.  
- Click on the correct answer.  
- Real-time feedback will indicate whether your selection was correct or incorrect.  

**View Score:**  
- At the end of the quiz, the app will display your final score.  

**API Details** 🌐  
This app fetches quiz data from the Open Trivia Database API.  
**Example API URL:**  
```bash  
https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple  
```  

**Screenshots** 📸  
- Setup Quiz Page  
- Quiz Page  

**Contributing** 🤝  
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.  

**License** 📄  
This project is licensed under the MIT License. See the LICENSE file for details.  

**Acknowledgements** 🙌  
- The Open Trivia Database for providing quiz data.  
- Inspiration and guidance from the React community.  
