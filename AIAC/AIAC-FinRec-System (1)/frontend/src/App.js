import React, { useState } from "react";
import axios from "axios";

function App() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/api/recommend", {
      income: Number(income),
      expenses: Number(expenses),
    });

    setResult(res.data.suggestion);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>FinRec System</h1>

      <input placeholder="Enter Income" onChange={(e) => setIncome(e.target.value)} /><br /><br />
      <input placeholder="Enter Expenses" onChange={(e) => setExpenses(e.target.value)} /><br /><br />

      <button onClick={handleSubmit}>Get Recommendation</button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;