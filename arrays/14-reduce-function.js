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
  likes: 80,
  username: "zaio",
  timestamp: "17:45",
  comments: []
  },
  {
  id: "4",
  likes: 155,
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

// add a new property called shares USING MAP
// posts.map((item, index) => {
//     return {...item, shares: 0}
// }).forEach((item, index) => {
//     console.log(`
//     ${item.username}  | ${item.timestamp}
//     IMAGE
//     ${item.likes} likes | ${item.comments.length} comments | ${item.shares} shares
// `)
// })

// FILTER 
// console.log(posts.filter((item, index) => (item.likes > 50)))

// FIND 
// console.log(posts.find((item) => item.id == 0 ))

// REDUCE 
// let acc = 0;
// for(let i=0; i<posts.length; i++) {
//     acc = acc + posts[i].likes
// }
// console.log(acc);

console.log(posts.reduce((acc, item) => {
  return acc += item.likes}
  , 0));

console.log(posts.reduce((acc, item) => acc += item.likes, 0));
