const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");

const db = require("./models/index");
require("dotenv").config();

const { User, Role } = require("./models/index");

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);

    if (process.env.SYNC_DB === "true") {
      try {
        await db.sequelize.sync({ alter: true });
        console.log("Database synchronized successfully");
      } catch (error) {
        console.error("Error synchronizing the database:", error);
      }
    } else {
      console.log(
        "SYNC_DB is not set to true, skipping database synchronization"
      );
    }
  });
};

prepareAndStartServer();

// _______________*****************________________

// const u1 = await User.findByPk(4);
// const r1 = await Role.findByPk(3);
// // u1.addRole(r1);
// const response = await u1.hasRoles(r1)
// console.log(response);

// _______________*****************________________

// const UserRepository = require('./repository/user-repository')

// app.listen(PORT, async () => {
//           console.log(`Server started at ${PORT}`);
//           const repo = new UserRepository()
//           const response = await repo.getById(1)
//           console.log(response);
//         });

// _______________*****************________________
// const UserService = require("./services/user-service");

// app.listen(PORT, async () => {
//           console.log(`Server started at ${PORT}`);
//           const service  = new UserService()
//           const newToken = service.createToken({email: 'bipesh@gmail.com', id: 1})
//           console.log("new token is : ", newToken);
//         });
