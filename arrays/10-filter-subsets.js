// iterate over all posts - use template literals & log 

const post = {
  id: "1",
  likes: 20,
  username: "akhilboddu",
  timestamp: "15:45",
  comments: []
};


const posts = [
  {
    id: "0",
    likes: 20,
    username: "akhilboddu",
    timestamp: "15:45",
    comments: [
      {
        username: "akhilboddu",
        comment: "Nice picture",
        id: "xhabjjdsASDddsa",
      },
    ],
  },
];

// push 6 object into array 
posts.push(
  post, 
  {
    id: "2",
    likes: 0,
    username: "asifhassam14",
    timestamp: "16:45",
    comments: []
  },
  {
    id: "3",
    likes: 75,
    username: "zaio",
    timestamp: "17:45",
    comments: []
  },
  {
    id: "4",
    likes: 125,
    username: "imharjotsingh",
    timestamp: "18:45",
    comments: []
  },
  {
    id: "5",
    likes: 0,
    username: "modaymotivation",
    timestamp: "18:45",
    comments: []
  },
);


// pop the last element from this array 
posts.pop();

// // add a new property called shares, use this 'map', it will return new array with the new property added to every element of the array
// // This is used a lot in react, 
// posts.map((item, index) => {
//   return {...item, shares: 0};
// }).forEach((item, index) => {
//     console.log(`
//     ${item.username}  | ${item.timestamp}
//     IMAGE
//     ${item.likes} likes | ${item.comments.length} comments | ${item.shares} shares
// `)
// })

// use filter to get specific subsets from array
console.log(posts.filter((item, index) => (item.likes > 50)));
