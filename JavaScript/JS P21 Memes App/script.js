const meme = document.getElementById("meme");
const title = document.getElementById("title");
const getMemeBtn = document.getElementById("get-meme-btn");
const container = document.querySelector(".container");

//API URL
const url = "https://meme-api.herokuapp.com/gimme/";

const subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

//Function to get random meme
const getMeme = () => {
  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];
  //Fetch data from the api
  fetch(url + randomSubreddit)
    .then((res) => res.json())
    .then((data) => {
      //   meme.src = data.url;
      //   title.textContent = data.title;

      //Display meme image and title only after the image loads
      const memeImg = new Image();
      memeImg.onload = () => {
        meme.src = data.url;
        title.textContent = data.title;
      };
      memeImg.src = data.url;
    });
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
