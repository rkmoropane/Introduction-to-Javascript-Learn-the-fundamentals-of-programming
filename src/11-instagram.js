// // // // Instagram Profile & Posts Objects 

// // // // const post = {
// // // //     likes: 25,
// // // //     username: "Kholofelo",
// // // //     timestamp: "22:33",
// // // //     comments: 25,
// // // // }
// // // // CRUD 
// // // // Create 
// // // // Read
// // // // Update
// // // // Delete
// // // // get data: READ
// // // // console.log(`${post.username} just posted a photo with ${post.likes} likes`)
// // // // const username = "kholo_moropane";

// // // // const profile = {
// // // //     username: "kholo_moropane",
// // // //     posts: 10,
// // // //     followers: 1000,
// // // //     following: 250,
// // // //     picture: "link",
// // // //     fullName: "Kholofelo Moropane",
// // // //     bio: "Some Information",
// // // //     link: "zaio.io",
// // // // };



// // // // //get data: READ
// // // // console.log(profile.username, profile["followers"]);


// // // // // modify: UPDATE
// // // // profile.posts = profile.posts + 1;
// // // // console.log(profile);

// // // // // create new Key: CREATE
// // // // profile.email = "kholofelo@zaio.io";
// // // // profile.phoneNumber = "0676736472";
// // // // console.log(profile);

// // // // // deleting a key-value pair in an Object: DELETE
// // // // delete profile.phoneNumber;
// // // // console.log(profile);

// // // // creating functions objects
// // // // const profile = {
// // // //     username: "kholo_moropane",
// // // //     posts: 10,
// // // //     followers: 1000,
// // // //     following: 250,
// // // //     picture: "link",
// // // //     fullName: "Kholofelo Moropane",
// // // //     bio: "Some Information",
// // // //     link: "zaio.io",
// // // //     info() {
// // // //         return `
// // // //             Info for: ${this.username}
// // // //             Posts: ${this.posts}
// // // //             Followers: ${this.followers}
// // // //             Following: ${this.following}
// // // //             bio: ${this.bio}
// // // //             link: ${this.link}
// // // //         `
// // // //     } // arrow function (not normal function)
// // // // };

// // // // console.log(profile.info());

// // // // Instagram 

// // // const profile = {
// // //     username: "kholofelomoropane",
// // //     posts: 55,
// // //     followers: 800,
// // //     following: 800,
// // //     picture: "link",
// // //     fullName: "Kholofelo Moropane",
// // //     bio: "Some information",
// // //     link: "zaio.com",
// // //     info() {
// // //       return `
// // //         Info for: ${this.username}
// // //         Posts: ${this.posts}
// // //         Followers: ${this.followers}
// // //         Following: ${this.following}
// // //         bio: ${this.bio}
// // //         link: ${this.link}
// // //       `
// // //     },
// // //     posted() {
// // //         // write your code here
// // //         // function: posted
// // //         // action: increase number of posts by 1
// // //         // print out: username just posted a photo
// // //         // console.log(the posted function)
// // //         this.posts = this.posts + 1;
// // //         return `
// // //         ${this.username} just posted a photo
// // //         Total number of posts updated to ${this.posts}.
// // //         `;
// // //     }
// // // }

// // // // console.log(profile.info());
// // // // add a console.log statement here
// // // console.log(profile.posted())
// // // console.log(profile.posted())
// // // console.log(profile.posted())
// // // console.log(profile.posted())
// // // console.log(profile.posted())


// // // Primitive vs Object types

// // // Primitive
// // // Undefined, null, boolean, number, string, symbol

// // // Objects allow us to manage structures of primitives

// // console.log("akhil" === "akhil");

// // // const obj = {name: "kholo"};
// // // const obj2 = {name: "Rama"};

// // // console.log(obj === obj2); // we are comparing the references address of the two object values, thats why it giving us

// // // console.log("akhil" === "akhil");

// // const name = "Kholo";

// // const obj = {};

// // const obj2 = obj; // Javascript object are passed by reference to the their addresses.

// // obj2.name = name;

// // console.log("Object 1", obj);
// // console.log("Object 2", obj2);
// // console.log(obj === obj2);

// // Object destructuring 
// // The destructuring assignment syntax is a JavaScript expression 
// // that makes it possible to unpack values from arrays,
// // or properties from objects, into distinct variables
// //         const {username, posts, followers, following, bio, link} = this; // unpacking values from an object in a this, in a file cabinet, meaning we have removed them from a file cabinet so that they are easily accessible. 
// // // 
// const profile = {
//     username: "akhilboddu",
//     posts: 55,
//     followers: 800,
//     following: 800,
//     picture: "link",
//     fullName: "Akhil Boddu",
//     bio: "Some information",
//     link: "zaio.io",
//     posted() {
//         this.posts = this.posts + 1;
//         return `
//         ${this.username} just posted a photo 
//         Total number of posts updated to ${this.posts}
//         `;
//     }
// }

// // console.log(profile.info())

// const info = (profile) => {
//   const {username, posts, followers, following, bio, link} = profile; // unpacking values from an object in a this, in a file cabinet, meaning we have removed them from a file cabinet so that they are easily accessible. 
//   return `
//   Info for: ${username}
//   Posts: ${posts}
//   Followers: ${followers}
//   Following: ${following}
//   bio: ${bio}
//   link: ${link}
//   `;
// };

// // Do destructuring without using the 'this' and info() is outside the profile
// console.log(info(profile))
// // Use object destructuring to make your code look a lot more clean and nice


// const post = {
//     likes: 20,
//     username: "akhilboddu",
//     timestamp: "15:45",
//     comments: 25
// }

// // do some object destructuring on posts object 
// const {likes, username, timestamp, comments} = post;

// console.log(
//     `${username} just posted a photo with ${likes} likes
//     it was posted at ${timestamp}, and currently has ${comments} comments
// `);