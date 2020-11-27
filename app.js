//! Search input
const searchUser = document.getElementById("searchUser");

//* Init Github
const github = new Github();

//* Init UI
const ui = new UI();

//! Search input event listener
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value; //? Moze i searchUser.value;

  if (userText !== "") {
    github
      .getUser(userText)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          //* Show alert
          ui.showAlert("Not found that user!", "alert alert-danger");
        } else {
          //* Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos); //? Repos je onaj objekat koji smo napravili. Zapravo se fabricki zove drugacije u githubu
        }
      })
      .catch((err) => console.log(err));
  } else {
    //* Clear profile input
    ui.clearProfile();
  }

  e.preventDefault();
});
