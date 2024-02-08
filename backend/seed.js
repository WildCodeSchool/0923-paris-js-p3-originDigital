/* eslint-disable no-await-in-loop */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const argon = require("argon2");
// Load environment variables from .env file
require("dotenv").config();
// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");
// Import database client
const database = require("./database/client");

const env = process.env.APP_ENV;
const prodURL = "https://origindigital.creativebrain.fr/api";

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
    await database.query("truncate subscribe");
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
          env === "production"
            ? `${prodURL}/upload/1707314821202.0.5938972316732665.20240202_144630.mp4`
            : "http://localhost:3310/upload/1707314821202.0.5938972316732665.20240202_144630.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1706026627922.0.5892447773024803.20231009_193616.jpg`
            : "http://localhost:3310/upload/1706026627922.0.5892447773024803.20231009_193616.jpg",
        date_publication: "2024-01-15 00:00:00",
        validate: 0,
        category_id: 1,
        user_id: 1,
      },
      {
        title: "Test 2",
        description: "This is test 2",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706027392971.0.4456285540259557.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706027392971.0.4456285540259557.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1706027393002.0.004230725508433952.20231009_193616.jpg`
            : "http://localhost:3310/upload/1706027393002.0.004230725508433952.20231009_193616.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 1,
        user_id: 1,
      },
      {
        title: "Test 3",
        description: "This is test 3",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706027392971.0.4456285540259557.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175109011.0.7540434504145492.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1706175109046.0.1258837761639806.20231009_193616.jpg`
            : "http://localhost:3310/upload/1706175109046.0.1258837761639806.20231009_193616.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 5,
        user_id: 1,
      },
      {
        title: "Test 4",
        description: "This is test 4",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175111665.0.12002348878148394.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175111665.0.12002348878148394.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1706175111693.0.34482996481330885.20231009_193616.jpg`
            : "http://localhost:3310/upload/1706175111693.0.34482996481330885.20231009_193616.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 7,
        user_id: 2,
      },
      {
        title: "Test 5",
        description: "This is test 5",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175352493.0.8500943026718941.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175352493.0.8500943026718941.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1706175352524.0.6291432758487412.20231009_193616.jpg`
            : "http://localhost:3310/upload/1706175352524.0.6291432758487412.20231009_193616.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 7,
        user_id: 2,
      },
      {
        title: "Test 6",
        description: "This is test 6",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1706175389880.0.09219329663891429.20231009_193616.jpg`
            : "http://localhost:3310/upload/1706175389880.0.09219329663891429.20231009_193616.jpg",
        date_publication: "2024-01-16 00:00:00",
        validate: 0,
        category_id: 7,
        user_id: 2,
      },
      {
        title: "Apero Fiesta",
        description: "Tuto cuisine",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707218588142.0.32350308952277085.Design sans titre (1).png`
            : "http://localhost:3310/upload/1707218588142.0.32350308952277085.Design sans titre (1).png",
        date_publication: "2024-02-06 15:20:00",
        validate: 0,
        category_id: 4,
        user_id: 1,
      },
      {
        title: "Recette Magique",
        description: "Meilleures recettes a découvrir",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707218955788.0.5248968479396601.pexels-robin-stickel-70497.jpg`
            : "http://localhost:3310/upload/1707218955788.0.5248968479396601.pexels-robin-stickel-70497.jpg",
        date_publication: "2024-02-06 12:29:15",
        validate: 0,
        category_id: 4,
        user_id: 1,
      },
      {
        title: "Pain comme a la boulangeire",
        description: "Comment faire son pain !",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707219041746.0.7611171796842462.pexels-malidate-van-784633.jpg`
            : "http://localhost:3310/upload/1707219041746.0.7611171796842462.pexels-malidate-van-784633.jpg",
        date_publication: "2024-02-06 12:30:41",
        validate: 0,
        category_id: 4,
        user_id: 1,
      },
      {
        title: "Apero Fiesta",
        description: "Tuto cuisine",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707218588142.0.32350308952277085.Design sans titre (1).png`
            : "http://localhost:3310/upload/1707218588142.0.32350308952277085.Design sans titre (1).png",
        date_publication: "2024-02-06 15:20:00",
        validate: 0,
        category_id: 4,
        user_id: 1,
      },
      {
        title: "Recette Magique",
        description: "Meilleures recettes a découvrir",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707218955788.0.5248968479396601.pexels-robin-stickel-70497.jpg`
            : "http://localhost:3310/upload/1707218955788.0.5248968479396601.pexels-robin-stickel-70497.jpg",
        date_publication: "2024-02-06 12:29:15",
        validate: 0,
        category_id: 4,
        user_id: 1,
      },
      {
        title: "Mexico Art !",
        description: "Le meilleur de l'art mexicain",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707227402918.0.6681351614987376.pexels-chait-goli-1918290.jpg`
            : "http://localhost:3310/upload/1707227402918.0.6681351614987376.pexels-chait-goli-1918290.jpg",
        date_publication: "2024-02-06 14:50:02",
        validate: 0,
        category_id: 2,
        user_id: 1,
      },
      {
        title: "24heures au Louvres",
        description: "Visite intégrale du Louvre pendant 24heures.",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707227663405.0.6069045066377712.pexels-una-laurencic-20967.jpg`
            : "http://localhost:3310/upload/1707227663405.0.6069045066377712.pexels-una-laurencic-20967.jpg",
        date_publication: "2024-02-06 14:50:02",
        validate: 0,
        category_id: 2,
        user_id: 1,
      },
      {
        title: "Leçon de dessin ",
        description: "Apprendre le dessin facilement avec nos videos",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707228057552.0.48343636778585664.pexels-gÃ¼l-iÅÄ±k-3246665.jpg`
            : "http://localhost:3310/upload/1707228057552.0.48343636778585664.pexels-gÃ¼l-iÅÄ±k-3246665.jpg",
        date_publication: "2024-02-06 15:00:57",
        validate: 0,
        category_id: 2,
        user_id: 1,
      },
      {
        title: "2024 la tendance des marchés",
        description: "Review des marchés 2024",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707228305016.0.0694249309277295.entrepreneur-1340649_1280.jpg`
            : "http://localhost:3310/upload/1707228305016.0.0694249309277295.entrepreneur-1340649_1280.jpg",
        date_publication: "2024-02-06 15:00:57",
        validate: 0,
        category_id: 3,
        user_id: 1,
      },
      {
        title: "Epargnez intelligemment en 2024",
        description:
          "Toutes les clés de l'épargne en 2024 , toutes nos astuces pour fructifier votre argent !",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1707314821202.0.5938972316732665.20240202_144630.mp4`
            : "http://localhost:3310/upload/1707314821202.0.5938972316732665.20240202_144630.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707234830639.0.30918347929685575.money-2724241_1280.jpg`
            : "http://localhost:3310/upload/1707234830639.0.30918347929685575.money-2724241_1280.jpg",
        date_publication: "2024-02-06 16:53:50",
        validate: 0,
        category_id: 3,
        user_id: 1,
      },
      {
        title: "Le Dollar le nerf de la guerre ?",
        description:
          "Documentaire sur le Dollar et son emprise sur l'économie mondiale.",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707234830639.0.30918347929685575.money-2724241_1280.jpg`
            : "http://localhost:3310/upload/1707234830639.0.30918347929685575.money-2724241_1280.jpg",
        date_publication: "2024-02-06 16:53:50",
        validate: 0,
        category_id: 3,
        user_id: 1,
      },
      {
        title: "Sur le toit du Monde !",
        description:
          "A 8849m on voit la vie autrement ! Plongez dans cette incroyable expédition.",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707235918358.0.613052199082393.nepal-4710522_1280.jpg`
            : "http://localhost:3310/upload/1707235918358.0.613052199082393.nepal-4710522_1280.jpg",
        date_publication: "2024-02-06 16:53:50",
        validate: 0,
        category_id: 5,
        user_id: 2,
      },
      {
        title: "Au coeur des chutes du Niagara",
        description: "Sensation au coeur des plus grandes chutes du monde .",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707236309712.0.08532545048838491.niagara-falls-2186816_1280.jpg`
            : "http://localhost:3310/upload/1707236309712.0.08532545048838491.niagara-falls-2186816_1280.jpg",
        date_publication: "2024-02-06 17:18:29",
        validate: 0,
        category_id: 5,
        user_id: 2,
      },
      {
        title: "Ticket pour le Paradis",
        description: "Voyage sensationnel au cœur de la foret Amazonienne.",
        URL_video:
          env === "production"
            ? `${prodURL}/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4`
            : "http://localhost:3310/upload/1706175389843.0.8841004398270393.VID-20231009-WA0012_1.mp4",
        type_video: 1,
        thumbnail:
          env === "production"
            ? `${prodURL}/upload/1707236437270.0.3725089461104818.amazonia-5406522_1280.jpg`
            : "http://localhost:3310/upload/1707236437270.0.3725089461104818.amazonia-5406522_1280.jpg",
        date_publication: "2024-02-06 17:18:29",
        validate: 0,
        category_id: 5,
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
        username: "Alex",
      },
      {
        mail: "toto@gmail.com",
        password: "toto",
        username: "toto",
      },
      {
        mail: "lulu@gmail.com",
        password: "lulu",
        username: "Lulu94",
      },
      {
        mail: "Aurel@gmail.com",
        password: "aure",
        username: "Aurel",
      },
      {
        mail: "admin@gmail.com",
        password: "admin",
        username: "Admin",
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
    const views = [
      {
        users_id: 1,
        video_id: 1,
        count: 4243,
      },
      {
        users_id: 1,
        video_id: 5,
        count: 1540,
      },
      {
        users_id: 2,
        video_id: 10,
        count: 2541,
      },
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

    for (let i = 0; i < views.length; i += 1) {
      queries.push(
        database.query(
          "insert into views(users_id, video_id, count) values (?, ?, ?)",
          [views[i].users_id, views[i].video_id, views[i].count]
        )
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
