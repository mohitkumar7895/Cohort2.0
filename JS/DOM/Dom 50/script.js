const reels = [
  {
    username: "Mohit",
    likeCount: 120,
    isLiked: false,
    commentCount: 32,
    caption: "Exploring the mountains today! 🏔️",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=1",
    shareCount: 10,
    isFollowed: false
  },
  {
    username: "Priya",
    likeCount: 98,
    isLiked: true,
    commentCount: 14,
    caption: "Sunset vibes hitting different today 🌅",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=2",
    shareCount: 5,
    isFollowed: true
  },
  {
    username: "Ankit",
    likeCount: 260,
    isLiked: false,
    commentCount: 50,
    caption: "Weekend workout session 💪🔥",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=3",
    shareCount: 18,
    isFollowed: false
  },
  {
    username: "Riya",
    likeCount: 450,
    isLiked: true,
    commentCount: 67,
    caption: "New dance routine! Let me know your thoughts 😍💃",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=4",
    shareCount: 40,
    isFollowed: true
  },
  {
    username: "Aman",
    likeCount: 76,
    isLiked: false,
    commentCount: 9,
    caption: "Simple life, simple joys ✨",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 3,
    isFollowed: false
  },
  {
    username: "Sneha",
    likeCount: 220,
    isLiked: false,
    commentCount: 30,
    caption: "Trying out a new recipe today 🍝",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=6",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "Arjun",
    likeCount: 540,
    isLiked: true,
    commentCount: 110,
    caption: "Road trip with the boys 🚗💨",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=7",
    shareCount: 60,
    isFollowed: true
  },
  {
    username: "Kavya",
    likeCount: 150,
    isLiked: false,
    commentCount: 22,
    caption: "Feeling cute today 😌",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 8,
    isFollowed: false
  },
  {
    username: "Dev",
    likeCount: 310,
    isLiked: false,
    commentCount: 47,
    caption: "Coding + Coffee = Perfect Sunday ☕💻",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=9",
    shareCount: 20,
    isFollowed: false
  },
  {
    username: "Aisha",
    likeCount: 600,
    isLiked: true,
    commentCount: 120,
    caption: "Vacation mode ON 🏖️🌊",
    video: "",
    userProfile: "https://i.pravatar.cc/150?img=10",
    shareCount: 88,
    isFollowed: true
  }
];



reels.forEach(function(reel) {
  const reelDiv = document.createElement("div");
  reelDiv.className = "real"; 
    reelDiv.innerHTML = `
    <img class="main-img" src="https://source.unsplash.com/random/400x700?sig=${Math.floor(Math.random() * 1000)}" alt="Reel Image">    
    <div class="bottom">
        <div class="user-info">
            <img class="user-profile" src="${reel.userProfile}" alt="${reel.username} Profile Picture">
            <span class="username">${reel.username}</span>
            <button class="follow-btn">${reel.isFollowed ? "Following" : "Follow"}</button>
        </div>
        <div class="actions">
            <div class="action-item like ${reel.isLiked ? "liked" : ""}">
                <span class="like-count
">${reel.likeCount}</span> ❤️
    
            </div>
            <div class="action-item comment">
                <span class="comment-count">${reel.commentCount}</span>     
                        💬
            </div>
            <div class="action-item share">
                <span class="share-count">${reel.shareCount}</span> 
                
                🔄
            </div>
        </div>
        <div class="caption">
            ${reel.caption}
        </div>
    </div>
    `;
    document.querySelector(".all-reals").appendChild(reelDiv);
});