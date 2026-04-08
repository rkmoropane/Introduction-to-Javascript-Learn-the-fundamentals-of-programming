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
// console.log( posts.map((item, index) => {
    // return {...item, shares: 0}
// }))
// write a new map function 
// console.log( posts.map((item, index) => {
//     return {...item, duration: 0}
// }))

// FILTER 
// console.log(posts.filter((item, index) => (item.likes > 50)));
// write a filter on posts to only show posts with 0 comments 
console.log(posts.filter((item, index) => {
    return item.comments.length === 0;
}));
console.log(posts.filter((item, index) => (item.comments.length === 0)));


// FIND 
// console.log(posts.find((item) => item.id == 0 ))

// REDUCE 
// console.log(posts.reduce((acc, item) => acc += item.likes, 0));

// let acc = 0;
// for(let i=0; i<posts.length; i++) {
//     acc = acc + posts[i].likes
// }
// console.log(acc);
