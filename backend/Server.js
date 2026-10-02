const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Heyy from Backend");
});

// ============================================

const taskRouter = require("./features/TitleNotification/routes/task.route");
app.use("/api", taskRouter);

// ============================================

app.listen(3000, () => {
  console.log("Server is Running");
});
