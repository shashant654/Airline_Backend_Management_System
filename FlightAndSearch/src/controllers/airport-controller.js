const { AirportService } = require("../services/index");
const { SuccessCodes } = require('../utils/error-codes')

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully created a new airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a new airport ",
      err: error,
    });
  }
};

module.exports = {
          create
};
