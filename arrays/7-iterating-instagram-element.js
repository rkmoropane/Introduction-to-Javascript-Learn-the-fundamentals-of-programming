// push 5 post objects using push() 
// remove post from feed (by unfollowing)

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

// push object into array 
posts.push(post, {
        id: "2",
        likes: 0,
        username: "asifhassam14",
        timestamp: "16:45",
        comments: []
    },
    {
        id: "3",
        likes: 10,
        username: "kholofelo13",
        timestamp: "17:50",
        comments: []
    },
    {
        id: "4",
        likes: 13,
        username: "tokologo12",
        timestamp: "00:00",
        comments: []
    },
    {
        id: "5",
        likes: 15,
        username: "Dinny13",
        timestamp: "01:50",
        comments: []
    }
);

// pop the last element from this array 
const lastPost = posts.pop();

console.log(lastPost);

console.log(posts);
