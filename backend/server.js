const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("../backend/routes/user.routes");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/error.middleware");

require("dotenv").config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/user", userRoute);

// If none of the above routes get matched, the control will fall on the following 2 lines
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is listening...${PORT}`.yellow.bold));
