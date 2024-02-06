export function searchImages(query) {
  const apiKey = "9yj5DiR8IgT1YOCzL6vTocECmGhxITzRg-0R2yK1J3I";
  const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length === 0) {
        displayNoResultsMessage();
      } else {
        displayImages(data.results);
      }
    })
    .catch((error) => {
      console.error("Error al buscar imágenes:", error);
    });
}

function displayImages(images) {
  const imageResults = document.getElementById("imageResults");
  imageResults.innerHTML = "";

  const firstColumn = document.createElement("div");
  firstColumn.classList.add("column");

  const secondColumn = document.createElement("div");
  secondColumn.classList.add("column");

  images.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.urls.regular;
    imgElement.alt = image.alt_description;
    imgElement.classList.add("gallery-image");

    if (index < 5) {
      firstColumn.appendChild(imgElement);
    } else {
      secondColumn.appendChild(imgElement);
    }
  });

  imageResults.appendChild(firstColumn);
  imageResults.appendChild(secondColumn);
}

function displayNoResultsMessage() {
  const imageResults = document.getElementById("imageResults");
  imageResults.innerHTML = "<p>No se encontraron resultados.</p>";
}
