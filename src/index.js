

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input");
  let cityElement = document.querySelector("#city");
  cityElement.textContent = searchInput.value;
}

let searchForm = document.querySelector("#searchform");
searchForm.addEventListener("submit", handleSearchSubmit);