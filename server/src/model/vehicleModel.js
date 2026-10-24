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

const viewAllVehicles = () => {
  return new Promise((resolve, reject) => {
    try {
      const query = `SELECT * FROM vehicles`;

      db.all(query, [], (err, rows) => {
        if (err) {
          console.error("Something's not right!", err);
          return reject(err);
        }

        resolve(rows);
      })
    } catch (error) {
      console.error("Something's not right!", error);
      reject(error);
    }
  })
}

const viewSingleVehicles = (id) => {
  return new Promise((resolve, reject) => {
    try {
      const query = `SELECT * FROM vehicles WHERE vehicles.id=?`;

      db.get(query, [id], (err, rows) => {
        if (err) {
          console.error("Something's not right!", err);
          return reject(err);
        }

        resolve(rows);
      })
    } catch (error) {
      console.error("Something's not right!", error);
      reject(error);
    }
  })
}


const editVehicle = (id, body) => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE vehicles
      SET plate_number = ?,
          brand = ?,
          model = ?,
          status = ?,
          officer_note = ?
      WHERE id = ?
    `;

    const values = [
      body.plateNumber,
      body.brand,
      body.model,
      body.status,
      body.officerNote ?? null,
      id,
    ];

    db.run(query, values, function (err) {
      if (err) {
        return reject(err);
      }

      if (this.changes === 0) {
        return resolve(null);
      }
    });

    // Retrieve the updated vehicle
      db.get(
        `SELECT * FROM vehicles WHERE id = ?`,
        [id],
        (err, row) => {
          if (err) {
            return reject(err);
          }

          resolve(row);
        }
      );
  });
};


const deleteVehicle = (id) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM vehicles WHERE id = ?`;

    db.run(query, [id], function (err) {
      if (err) {
        console.error("Something's not right!", err);
        return reject(err);
      }

      // Check whether a vehicle was deleted
      if (this.changes === 0) {
        return resolve(false);
      }

      resolve(true);
    });
  });
};

module.exports = { createNewVehicle, viewAllVehicles, viewSingleVehicles, editVehicle, deleteVehicle };