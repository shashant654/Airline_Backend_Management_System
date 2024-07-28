const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/index");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}
// class AirportRepository extends CrudRepository {
//   constructor(model) {
//     super(model);
//   }
// }

module.exports = AirportRepository;
