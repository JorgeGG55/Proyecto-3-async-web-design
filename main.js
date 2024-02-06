import { searchImages } from "./searchImages";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  loadRandomImages();

  document.querySelector("#app").innerHTML = `
    <div id="sidenav" class="sidenav">
      <button class="close-btn">&times;</button>
      <button class="logingMobileButton">Iniciar Sesión</button>
      <button class="registerMobileButton">Registrarse</button>
    </div>
    <header>
      <button class="menu-btn">&#9776;</button>
      <div class="logo">
        <img class="homeLogo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest Logo" width="50" height="50">
      </div>
      <button class="homeButton">Inicio</button>
      <input type="text" placeholder="Buscar..." class="search-input" id="searchInput">
      <button class="searchButton">Buscar</button>
      <nav>
        <button class="logingButton">Iniciar Sesión</button>
        <button class="registerButton">Registrarse</button>
      </nav>
    </header>
    <div id="imageResults" class="row"></div>
  `;

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.querySelector(".searchButton");
  const menuButton = document.querySelector(".menu-btn");
  const closeMenuButton = document.querySelector(".close-btn");
  const homeButton = document.querySelector(".homeButton");
  const homeLogo = document.querySelector(".homeLogo");

  function performSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
      searchImages(searchTerm);
    } else {
      const imageResults = document.getElementById("imageResults");
      imageResults.innerHTML = "";
    }
  }

  searchButton.addEventListener("click", () => {
    performSearch();
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  });

  homeButton.addEventListener("click", () => {
    loadRandomImages();
    searchInput.value = "";
  });

  homeLogo.addEventListener("click", () => {
    loadRandomImages();
    searchInput.value = "";
  });

  function openNav() {
    const sidenav = document.getElementById("sidenav");
    sidenav.style.width = sidenav.style.width === "250px" ? "0" : "250px";
  }

  menuButton.addEventListener("click", () => {
    openNav();
  });

  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }

  closeMenuButton.addEventListener("click", () => {
    closeNav();
  });

  function loadRandomImages() {
    const randomQueries = [
      "nature",
      "city",
      "animal",
      "food",
      "architecture",
      "landscape",
    ];
    const randomQuery =
      randomQueries[Math.floor(Math.random() * randomQueries.length)];

    const randomPage = Math.floor(Math.random() * 10) + 1;

    const query = `${randomQuery}&page=${randomPage}&per_page=10&order_by=popular&orientation=landscape`;
    searchImages(query);
  }
});
