const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://dukeokeke:Basicpiano827@cluster0.pejblzu.mongodb.net/'; // Update with your MongoDB connection string
const dbName = 'test_user'; // Name of your database

let db;

async function connect() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

function getDB() {
  return db;
}

module.exports = { connect, getDB };
