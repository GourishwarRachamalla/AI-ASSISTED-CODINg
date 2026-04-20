const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/recommend', (req, res) => {
    const { income, expenses } = req.body;

    let suggestion = "";

    if (income > expenses) {
        suggestion = "You can invest in SIP or mutual funds.";
    } else if (income === expenses) {
        suggestion = "Maintain balance and reduce extra spending.";
    } else {
        suggestion = "Cut down expenses and focus on savings.";
    }

    res.json({ income, expenses, suggestion });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});