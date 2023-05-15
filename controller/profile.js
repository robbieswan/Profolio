const { getDB, connect } = require('../db/connect');
// const mydb = db.connect()

async function getProfile(req, res) {
  try {
    await connect()
    const db = getDB();

    if (!db) {
      throw new Error('Database connection not established');
    }

    const profile = await db.collection('test_user').collection('profolio').find().toArray();
    res.json(profile);
  } catch (error) {
    console.error('Error retrieving profile:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = { getProfile };
