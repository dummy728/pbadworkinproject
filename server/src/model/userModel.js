const { dbRun, dbGet } = require("../middleware/sqlite_helpers");
const { randomUUID } = require("node:crypto");


const createNewUser = async (body) => {
   const id  = randomUUID();
   const values = [
    id,
    body.username,
    body.email,
    body.password,
  ];
  const query = `
    INSERT INTO users (user_id, user_name, email, password)
    VALUES (?, ?, ?, ?)
  `;

  const result = await dbRun(query, values);
  
  return {
    id: result.lastID,
    ...body,
  };
};

const findUser = async(username) => {
  const query = `select * from users where user_name='${username}'`
  return await dbGet(query)
}

module.exports = {
    createNewUser,
    findUser
}