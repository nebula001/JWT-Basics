require("dotenv").config();
const express = require("express");
const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");
const routerApp = require("./routes/main");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1", routerApp);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
