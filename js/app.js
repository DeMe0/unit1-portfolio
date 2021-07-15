// Nav-bar button toggle
// const navToggle = document.querySelector(".nav-button");

// navToggle.addEventListener("click", () => {
//   $("#nav-menu").slideToggle();
//   $("#nav-menu").toggleClass("nav-is-open");
// });

// First, select our projects ID
const $projects = $("#projects");
$.ajax("./json/projects.json")
  .then((data) => {
    // loop over the array of the projects
    data.forEach((project, index) => {
      const $projects = $("<div class ='item'>");
      $projects.html(`<h3 class ='project-name'>${project.name}</h3>
        <p class ='project-info'>${project.description}</p>
        <img src = '${project.image}'/>`);
      $("#projectList").append($projects); //append the projects to the projects section
    });
  })
  .catch((error) => console.log(error));
