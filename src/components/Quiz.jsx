import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
  const { state } = useLocation();
  const { category, difficulty, amount } = state || {};

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
      try {
        const response = await axios.get(url);
        setQuestions(response.data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [amount, difficulty, category]);

  const handleAnswer = (answer) => {
    const correct = questions[currentIndex].correct_answer;

    if (answer === correct) {
      setScore(score + 1);
    }

    setSelectedAnswer(answer);
    setTimeout(() => {
      setSelectedAnswer("");
      setCurrentIndex(currentIndex + 1);
    }, 1000);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentIndex >= questions.length) {
    return <div className="ScoreCard">Your Score: {score} / {questions.length}</div>;
  }

  const currentQuestion = questions[currentIndex];
  const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

  return (
    <div className="container">
      <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />

      <div className="options">
        {options.map((option) => (
          <button
            key={option}
            className={
              selectedAnswer
                ? option === currentQuestion.correct_answer
                  ? "correct"
                  : option === selectedAnswer
                  ? "wrong"
                  : ""
                : ""
            }
            onClick={() => handleAnswer(option)}
            disabled={!!selectedAnswer}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>

      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Quiz;
