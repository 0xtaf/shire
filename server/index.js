const express = require("express");
const next = require("next");
const cookieParser = require('cookie-parser')
const logger = require('morgan')



const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());
    server.use(express.json());
    server.use(logger('dev'));
    server.use(express.urlencoded({ extended: false }));

    const showRoutes = require("./routes/index.js");
    const createUser = require("./routes/userCreate.js")
    const sendMail = require("./routes/send.js")
    const createBlog = require("./routes/posts/blogCreate.js")
    const createWriteup = require("./routes/write-ups/writeupCreate.js")

    server.use("/api", showRoutes(server));
    server.use("/api", createUser(server));
    server.use("/api", sendMail(server));
    server.use("/api", createBlog(server));
    server.use("/api", createWriteup(server));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });