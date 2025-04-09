const express = require('express');
const app = express();
const port = 3000;

app.get('/quiztest', (req, res) => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctIndex: 0
    },
    {
      question: "Which HTML tag is used to include JavaScript?",
      options: ["<script>", "<js>", "<javascript>", "<code>"],
      correctIndex: 0
    }
  ];
  
  res.json(questions);
});

app.listen(port, () => {
  console.log(`Quiz server running at http://localhost:${port}`);
});
