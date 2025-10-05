function getUser() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      let user = data.results[0];

      document.getElementById("photo").src = user.picture.large;
      document.getElementById("name").textContent = user.name.first + " " + user.name.last;
      document.getElementById("email").textContent = user.email;
      document.getElementById("phone").textContent = user.phone;
      document.getElementById("location").textContent = user.location.city + ", " + user.location.country;
    })
    .catch(error => console.error("Error fetching user:", error));
}

getUser();
// jokessss///////////////
function getJoke() {
  fetch("https://icanhazdadjoke.com/slack")
    .then(res => res.json())
    .then(data => {
      let joke = data.attachments[0].text;
      document.getElementById("joke").textContent = joke;
    })
    .catch(err => {
      document.getElementById("joke").textContent = "Oops! Couldn't load a joke 😅";
      console.error("Error:", err);
    });
}

document.getElementById("btn").addEventListener("click", getJoke);

// Load first joke when page opens
getJoke();

// advices part==============
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
      document.getElementById("advice").textContent = data.slip.advice;
    })
    .catch(err => console.log("Error:", err));
}

getAdvice();
