
const profile = {
    username: "",
    password: "",
    email: "",
    posts: 0,
    followers: 0,
    following: 0,
    picture: "",
    fullName: "",
    bio: "",
    link: "",
    info() {
        const {username, posts, followers, following, bio, link} = this;
        return `
          Info for: ${username}
          Posts: ${posts}
          Followers: ${followers}
          Following: ${following}
          bio: ${bio}
          link: ${link}
        `;
    },
    posted() {
        this.posts = this.posts + 1;
        return `
        ${this.username} just posted a photo 
        Total number of posts updated to ${this.posts}
        `;
    }
};

const signedUpUser = {
    username: "akhilboddu",
    email: "akhil@zaio.io",
    password: "recordingIsFun"
};

console.log(signedUpUser); // need to merge the two objects together.

const newUser = Object.assign({}, profile, signedUpUser);


newUser.password = "12";

console.log("combinedObject:", newUser);
console.log("emptyProfileObject:", profile);
console.log("signUpObject:", signedUpUser);