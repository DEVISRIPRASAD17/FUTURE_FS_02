const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
let leads = [
  {
    name: "DSP",
    email: "dsp@gmail.com",
    phone: "9876543210",
    status: "New"
  }
];

app.get("/", (req, res) => {
    res.send("CRM Backend Running");
});

app.get("/api/leads", (req, res) => {
    res.json(leads);
});

app.post("/api/leads", (req, res) => {
    leads.push(req.body);
    res.json({ message: "Lead Added" });
});

app.listen(5000, () => {
    console.log("Server Running");
});