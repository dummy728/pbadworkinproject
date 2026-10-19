const db = require('../config/database');

/**
 * Insert kendaraan baru
 * @param {Object} body - { plateNumber, brand, model, status, officerNote }
 * @returns {Promise<Object>} - data yang baru dibuat
 */
const createNewVehicle = (body) => {
  return new Promise((resolve, reject) => {
    try {
      const query = `
        INSERT INTO vehicles (plate_number, brand, model, status, officer_note)
        VALUES (?, ?, ?, ?, ?)
      `;
      const values = [
        body.plateNumber,
        body.brand,
        body.model,
        body.status,
        body.officerNote ?? null,
      ];

      db.run(query, values, function (err) {
        if (err) {
          console.error("Something's not right!", err);
          return reject(err);
        }

        // this.lastID = id auto-increment yang baru dibuat
        resolve({
          id: this.lastID,
          ...body,
        });
      });
    } catch (error) {
      console.error("Something's not right!", error);
      reject(error);
    }
  });
};

module.exports = { createNewVehicle };