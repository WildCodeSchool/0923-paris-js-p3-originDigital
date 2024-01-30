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
    await database.query("SET foreign_key_checks = 0");
    await database.query("truncate add_tags");
    await database.query("truncate favorites");
    await database.query("truncate likes");
    await database.query("truncate subcribe");
    await database.query("truncate upload");
    await database.query("truncate views");
    await database.query("truncate comments");
    await database.query("truncate videos");
    await database.query("truncate categories");
    await database.query("truncate users");
    await database.query("truncate tags");
    await database.query("SET foreign_key_checks = 1");
    const videos = [
      {
        title: "Test 1",
        description: "This is test 1",
        URL_video:
          "http://localhost:3310/upload/1705322251908.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4",
        type_video: 1,
        thumbnail:
          "http://localhost:3310/upload/1705322251914.A-715822-1506248998-3796.jpg",
        date_publication: "2024-01-15 00:00:00",
        validate: 0,
        category_id: 1,
        user_id: 1,
      },
      {
        title: "Test 2",
        description: "This is test 2",
        URL_video:
          "http://localhost:3310/upload/1705394473920.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4",
        type_video: 1,
        thumbnail:
          "http://localhost:3310/upload/1705394473924.domain-to-ip.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 1,
        user_id: 1,
      },
      {
        title: "Test 3",
        description: "This is test 3",
        URL_video:
          "http://localhost:3310/upload/1705398010537.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4",
        type_video: 1,
        thumbnail:
          "http://localhost:3310/upload/1705398010540.domain-to-ip.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 5,
        user_id: 1,
      },
      {
        title: "Test 4",
        description: "This is test 4",
        URL_video:
          "http://localhost:3310/upload/1705398397490.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4",
        type_video: 1,
        thumbnail:
          "http://localhost:3310/upload/1705398397493.domain-to-ip.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 7,
        user_id: 2,
      },
      {
        title: "Test 5",
        description: "This is test 5",
        URL_video:
          "http://localhost:3310/upload/1705398505007.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4",
        type_video: 1,
        thumbnail:
          "http://localhost:3310/upload/1705398505012.domain-to-ip.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 7,
        user_id: 2,
      },
      {
        title: "Test 6",
        description: "This is test 6",
        URL_video:
          "http://localhost:3310/upload/1705398537360.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4",
        type_video: 1,
        thumbnail:
          "http://localhost:3310/upload/1705398537363.domain-to-ip.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 7,
        user_id: 2,
      },
    ];
    const associatedVideoTags = [
      {
        video_id: 1,
        tag_id: 4,
      },
      {
        video_id: 1,
        tag_id: 5,
      },
      {
        video_id: 2,
        tag_id: 1,
      },
      {
        video_id: 2,
        tag_id: 3,
      },
      {
        video_id: 3,
        tag_id: 4,
      },
      {
        video_id: 3,
        tag_id: 3,
      },
      {
        video_id: 4,
        tag_id: 4,
      },
      {
        video_id: 4,
        tag_id: 6,
      },
      {
        video_id: 5,
        tag_id: 5,
      },
      {
        video_id: 5,
        tag_id: 6,
      },
      {
        video_id: 6,
        tag_id: 5,
      },
      {
        video_id: 6,
        tag_id: 6,
      },
    ];
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
    for (let i = 0; i < videos.length; i += 1) {
      queries.push(
        database.query(
          "insert into videos(title, description, URL_video, type_video, thumbnail, date_publication, validate, category_id, user_id ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            videos[i].title,
            videos[i].description,
            videos[i].URL_video,
            videos[i].type_video,
            videos[i].thumbnail,
            videos[i].date_publication,
            videos[i].validate,
            videos[i].category_id,
            videos[i].user_id,
          ]
        )
      );
    }
    for (let i = 0; i < associatedVideoTags.length; i += 1) {
      queries.push(
        database.query("insert into add_tags(video_id,tag_id) values (?,?)", [
          associatedVideoTags[i].video_id,
          associatedVideoTags[i].tag_id,
        ])
      );
    }
    /* ************************************************************************* */
    // console.log("queries", await Promise.all(queries));
    // Wait for all the insertion queries to complete
    await Promise.all(queries);
    // Close the database connection
    database.end();
    console.info(`${database.databaseName} update from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};
// Run the seed function
seed();
