// const { Booking } = require("../models/index");
// const { StatusCodes } = require('http-status-codes')
// const { AppError, ValidationError } = require("../utils/error/index");

// class BookingRepository {
//   async create(data) {
//     try {
//           const booking = await Booking.create(data)
//           return booking;
//     } catch (error) {
//       if (error.name == "SequelizeValidatonError") {
//         throw new ValidationError(error);
//       }
//       throw new AppError('ResponsiveError',
//            'Can not create booking',
//            'There is some issue creating the booking, please try again later',
//            StatusCodes.INTERNAL_SERVER_ERROR
//           );
//     }
//   }

  

// }

// module.exports = BookingRepository;


const { StatusCodes } = require("http-status-codes");

const { Booking } = require("../models/index");
const { AppError, ValidationError } = require("../utils/errors/index");

class BookingRepository {
  async create(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      if (error.name == "SequelizeValidationError") {
        throw new ValidationError(error);
      }
      throw new AppError(
        "RepositoryError",
        "Cannot create Booking",
        "There was some issue creating the booking, please try again later",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(bookingId, data) {
    try {
      const booking = await Booking.findByPk(bookingId);
      if (data.status) {
        booking.status = data.status;
      }
      await booking.save();
      return booking;
    } catch (error) {
      throw new AppError(
        "RepositoryError",
        "Cannot update Booking",
        "There was some issue updating the booking, please try again later",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = BookingRepository;