require("dotenv").config();
const app = require("./src/app");
const PORT = process.env.PORT || 3000;
const connectToDb = require("./src/db/db");

connectToDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
