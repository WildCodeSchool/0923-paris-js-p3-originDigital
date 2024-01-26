/* eslint-disable no-await-in-loop */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const argon = require("argon2");

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate users");
    // await database.query("truncate tags");

    const users = [
      {
        mail: "alex@gmail.com",
        password: "alex",
        username: "alex",
      },
      {
        mail: "toto@gmail.com",
        password: "toto",
        username: "toto",
      },
    ];

    const tags = [
      {
        name: "cats",
      },
      {
        name: "dogs",
      },
      {
        name: "birds",
      },
      {
        name: "bear",
      },
      {
        name: "art",
      },
      {
        name: "yoga",
      },
      {
        name: "marathon",
      },
      {
        name: "pastry",
      },
    ];

    const categories = [
      { name: "Animals" },
      { name: "Architecture" },
      { name: "Art" },
      { name: "Business" },
      { name: "Food" },
      { name: "Nature" },
      { name: "Technology" },
      { name: "Travel" },
      { name: "Sport" },
    ];

    const hashingOptions = {
      type: argon.argon2id,
      memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
      timeCost: 2,
      parallelism: 1,
    };

    // Insert fake data into the 'item' table
    for (let i = 0; i < users.length; i += 1) {
      const hash = await argon.hash(users[i].password, hashingOptions);
      queries.push(
        database.query(
          "insert into users(mail, username, password) values (?, ?, ?)",
          [users[i].mail, users[i].username, hash]
        )
      );
    }

    for (let i = 0; i < tags.length; i += 1) {
      queries.push(
        database.query("insert into tags(name) values (?)", [tags[i].name])
      );
    }

    for (let i = 0; i < categories.length; i += 1) {
      queries.push(
        database.query("insert into categories(name) values (?)", [
          categories[i].name,
        ])
      );
    }
    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
