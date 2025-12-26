const express = require("express");
const routes = require("./routes/routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: "Oops! This route does not exist.",
    status: "error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
