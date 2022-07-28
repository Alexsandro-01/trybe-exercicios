const db = require('./db');

const userModel = {
  async exists(id) {
    const existsSql = 'SELECT 1 FROM db.user WHERE id = ?';
    const [[exists]] = await db.query(existsSql, [id]);
    return !!exists;
  },

  async get(id) {
    const getSql = 'SELECT * FROM db.user WHERE id = ?';
    // const [[item]] = await db.query(getSql, [id]);
    const result = await db.query(getSql, [id]);
    const items = result[0];
    const item = items[0];
    return item;
  },
};

module.exports = userModel;