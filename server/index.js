const express = require("express");
const next = require("next");
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors');


const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors())
    server.use(cookieParser());
    server.use(express.json());
    server.use(logger('dev'));
    server.use(express.urlencoded({ extended: true }));

    const showRoutes = require("../pages/api/index.js");
    const createUser = require("../pages/api/userCreate.js")
    const sendMail = require("../pages/api/send.js")
    const createBlog = require("../pages/api/posts/blogCreate.js")

    server.use("/api", showRoutes(server));
    server.use("/api", createUser(server));
    server.use("/api", sendMail(server));
    server.use("/api", createBlog(server));

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