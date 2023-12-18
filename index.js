// SETTING UP EFFECT ON HOME PAGE
var i = 0;
var txt = "Hello world! My name is Giovanni and this portfolio is a brief representation of what I have accomplished as a Software Developer. This journey started aproximately one year ago and since then I've been experimenting with different languages and frameworks, going from Ruby and Ruby on Rails, JavaScript, NodeJS and React, and more recently, C++. Currently, I'm a Software Development student at Bow Valley College, Calgary. Feel free to visit any of my channels and contact me if you wish :)";
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro-txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}

// CALLING EFFECT
window.addEventListener("load", (event) => {
  typeWriter();
});

// MAIN CONTENT TO BE CHANGED
var mainContent = document.getElementById("content");

// CHANGING TO HOME PAGE
var homeHTML = "<div id='intro'><i class='fa-solid fa-code'></i><p id='intro-txt'></p></div><img src='./images/picture.png' id='profile-picture'/>";
var homeBtn = document.getElementById("home-btn");

homeBtn.addEventListener("click", (event) => {
  mainContent.innerHTML = homeHTML;
  location.reload();
});

// CHANGING TO ABOUT PAGE
var aboutHTML = "<div id='about-container'><div id='background'><div id='education-header'><i class='fa-solid fa-graduation-cap'></i><h1>Education:</h1></div><p><span>Bow Valley College (Current)</span><br>Software Development Diploma</p><p><span>Le Wagon (2022)</span><br>Web Development Coding Bootcamp - Batch #1008</p><p><span>PUC-Rio (2018)</span><br>Master's degree in Business with emphasis in Finance</p><p><span>UFF (2015)</span><br>Bachelor's degree in Business and Management</p><h2>Other courses:</h2><p><span>By Academind (2023)</span><br>Git & Github - The Practical Guide</p><p><span>By John Smilga (2023)</span><br>MERN Stack Course - MongoDB, Express, React & NodeJS</p><p><span>By John Smilga (2023)</span><br>NodeJS Tutorial & Projects Course</p></div><div id='stacks-container'><div id='stacks-header'><i class='fa-solid fa-toolbox'></i><h1>Tech Stacks:</h1></div><div id='tech-stacks'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' width='68px'/><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' width='68px'/><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' width='68px'/><i class='devicon-github-original'></i><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' width='68px' /><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' width='68px'/></div></div></div>";
var aboutBtn = document.getElementById("about-btn");

aboutBtn.addEventListener("click", (event) => {
  mainContent.innerHTML = aboutHTML;
});

// CHANGING TO PROJECTS PAGE
var projectsHTML = "<div id='projects-container'><div class='project dailymeals'><div class='project-info'><p>DAILY MEALS</p><div class='project-links'><a href='https://dailymeals.herokuapp.com/' target='_blank'><i class='fa-solid fa-globe'></i></a><a href='https://github.com/barrosgiovanni/dailymeals' target='_blank'><i class='fa-brands fa-github'></i></a></div></div></div><div class='project movieme'><div class='project-info'><p>MOVIE.ME</p><div class='project-links'><a href='https://movieme.herokuapp.com/' target='_blank'><i class='fa-solid fa-globe'></i></a><a href='https://github.com/barrosgiovanni/movie.me' target='_blank'><i class='fa-brands fa-github'></i></a></div></div></div><div class='project stocktracker'><div class='project-info'><p>STOCK TRACKER</p><div class='project-links'><a href='https://stocktracker-tau.vercel.app/' target='_blank'><i class='fa-solid fa-globe'></i></a><a href='https://github.com/barrosgiovanni/stocktracker' target='_blank'><i class='fa-brands fa-github'></i></a></div></div></div><div class='project picsrepo'><div class='project-info'><p>PICS REPO</p><div class='project-links'><a href='https://thepicsrepo.herokuapp.com/' target='_blank'><i class='fa-solid fa-globe'></i></a><a href='https://github.com/barrosgiovanni/pics_repo' target='_blank'><i class='fa-brands fa-github'></i></a></div></div></div><div class='project jobify'><div class='project-info'><p>JOBIFY</p><div class='project-links'><a href='https://jobifying.onrender.com/' target='_blank'><i class='fa-solid fa-globe'></i></a><a href='https://github.com/barrosgiovanni/jobify-production' target='_blank'><i class='fa-brands fa-github'></i></a></div></div></div></div>";
var projectsBtn = document.getElementById("projects-btn");

projectsBtn.addEventListener("click", (event) => {
  mainContent.innerHTML = projectsHTML;
});
