const express = require("express");
const app = express();
const itemRoutes = require("./routes/itemRoutes");
const cors = require("cors");

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api", itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
