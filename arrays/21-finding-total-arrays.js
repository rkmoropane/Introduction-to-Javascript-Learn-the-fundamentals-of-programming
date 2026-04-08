// iterate over all posts - use template literals & log 

const post = {
  id: "1",
  likes: 20,
  username: "akhilboddu",
  timestamp: "15:45",
  comments: []
};


const postsInKenya = [
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

const postsInSouthAfrica = []
// push 6 object into array 
postsInSouthAfrica.push(
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

// const totalPosts = [...postsInKenya, ...postsInSouthAfrica]; //spread
const totalPosts = []; //use destructuring

// console.log(postsInKenya, postsInSouthAfrica);
console.log(totalPosts);
