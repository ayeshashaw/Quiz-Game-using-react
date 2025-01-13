import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SetupQuiz = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState(10);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/quiz", { state: { category, difficulty, amount: Number(amount) } });
  };

  return (
    <div className="container">
      <h1>Setup Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option  value="">Select</option>
          <option  value="9">General Knowledge</option>
          <option  value="21">Sports</option>
          <option  value="23">History</option>
          <option   value="25">Art</option>
        </select>

        <label htmlFor="difficulty">Difficulty:</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label htmlFor="amount">Number of Questions:</label>
        <input className="inputBox"
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          max="50"
          required
        />

        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default SetupQuiz;
