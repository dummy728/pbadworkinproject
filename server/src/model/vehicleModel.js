const { dbRun, dbGet, dbAll } = require("../middleware/sqlite_helpers");

/**
 * Insert kendaraan baru
 * @param {Object} body - { plateNumber, brand, model, status, officerNote }
 * @returns {Promise<Object>} - data yang baru dibuat
 */
const createNewVehicle = async (body) => {
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

  const result = await dbRun(query, values);

  return {
    id: result.lastID,
    ...body,
  };
};

/**
 * Retrieve all vehicles
 * @returns {Promise<Array>}
 */
const viewAllVehicles = async () => {
  const query = `SELECT * FROM vehicles`;

  return await dbAll(query);
};

/**
 * Retrieve a single vehicle by ID
 * @param {number} id
 * @returns {Promise<Object|null>}
 */
const viewSingleVehicles = async (id) => {
  const query = `SELECT * FROM vehicles WHERE id = ?`;

  return await dbGet(query, [id]);
};

/**
 * Update an existing vehicle
 * @param {number} id
 * @param {Object} body
 * @returns {Promise<Object|null>}
 */
const editVehicle = async (id, body) => {
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

  const result = await dbRun(query, values);

  // Vehicle not found
  if (result.changes === 0) {
    return null;
  }

  // Retrieve the updated vehicle
  const updatedVehicle = await dbGet(
    `SELECT * FROM vehicles WHERE id = ?`,
    [id]
  );

  return updatedVehicle;
};

/**
 * Delete a vehicle
 * @param {number} id
 * @returns {Promise<boolean>}
 */
const deleteVehicle = async (id) => {
  const query = `DELETE FROM vehicles WHERE id = ?`;

  const result = await dbRun(query, [id]);

  return result.changes > 0;
};

module.exports = {
  createNewVehicle,
  viewAllVehicles,
  viewSingleVehicles,
  editVehicle,
  deleteVehicle,
};
