const User = require('../Schemas/userSchema');
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');

async function seedDB() {
  try {
    // first ensure the database is empty
    User.deleteMany({});

    // This array will store the fake data of users
    let userData = [];

    for (let i = 0; i < 5000; i++) {
      const fname = faker.name.firstName();
      const lname = faker.name.lastName();
      const password = faker.internet.password();
      const email = faker.internet.email();
      const city = faker.address.city();
      const state = faker.address.state();
      const country = faker.address.country();

      userData.push({
        fname,
        lname,
        password,
        email,
        city,
        state,
        country,
      });
    }
    await User.insertMany(userData); // insert the data into db
    console.log('database seeding successfull');
  } catch (err) {
    console.log(err);
  }
}

module.exports = seedDB;
