const express = require("express");

const connect = require("./config/db");

const userController = require("./controller/users.controller");
const bookController = require("./controller/books.controller");
const checkOutController = require("./controller/checkedOut.controller");
const authorController = require("./controller/author.controller");
const sectionController = require("./controller/section.controller");

const app = express();

app.use(express.json());

app.use("/user", userController);
app.use("/book", bookController);
app.use("/checkedout", checkOutController);
app.use("/author", authorController);
app.use("/section", sectionController);

app.listen(2345, async () => {
    await connect();
    console.log("listening at port 2345...");
});