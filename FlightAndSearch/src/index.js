// ___________**************_____________ 
const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const db = require("./models/index");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use("/api", ApiRoutes);
  
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    if (process.env.SYNC_DB) {
      try {
        await db.sequelize.sync({ alter: true });
        console.log('Database synchronized successfully');
      } catch (error) {
        console.error('Error synchronizing the database:', error);
      }
    }
  });
};

setupAndStartServer();

// ___________**************_____________ 
// const express = require("express");
// const bodyParser = require("body-parser");
// const { PORT } = require("./config/serverConfig");

// const db = require("./models/index");

// const ApiRoutes = require("./routes/index");
// const { where } = require("sequelize");

// const setupAndStartServer = async () => {
//   const app = express();

//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({ extended: true }));

//   app.use("/api", ApiRoutes);

//   app.listen(PORT, async () => {
//     console.log(`server started at ${PORT}`);
//     if (process.env.SYNC_DB) {
//       db.sequelize.sync({ alter: true });
//     }
//   });
// };

// setupAndStartServer();
// ___________**************_____________ 


// "test": "echo \"Error: no test specified\" && exit 1"

// const CityRepository = require('./repository/city-repository')
// const {City, Airport} = require('./models/index')

// app.listen(PORT, async () => {
//   console.log(`server started at ${PORT}`);
// //   const city = await City.findOne({
// //     where: {
// //       id:9
// //     }
// //   })
// //   const airports = await city.getAirpots();
// //   // const newAirport = await Airport.findOne({
// //   //   where :{
// //   //     id:5
// //   //   }
// //   // })
// //   // await city.addAirport(newAirport)
// //   // await city.addAirport({
// //   //   name: 'Jindal Vijaynagar Airport'
// //   // })

// //   console.log(city, airports);
// // });
// };
