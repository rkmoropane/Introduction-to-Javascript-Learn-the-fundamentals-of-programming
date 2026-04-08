
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
}


// ...
// rest spread

const newUser = { ...profile, ...signedUpUser }; // spread - Only meddling with our newUser object, signUpUser and profile objects remained as they were.
// const newUser = Object.assign({}, profile, signedUpUser);
newUser.password = "12";
console.log("combinedObject", newUser);
console.log("emptyProfileObject", profile);
console.log("signUpObject", signedUpUser);

//  rest operator ...
function sum (a, b, ...args) {
    // sum all the parameters/arguments, rest of the parameters are put inside the ...
    console.log(a, b, args);
};

sum(22, 44, 99, 33, 66, 88);
