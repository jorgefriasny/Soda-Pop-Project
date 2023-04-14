// Fetching Header and Footer

function fetchHeader() {
  fetch("/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#header").innerHTML = data;
    });
}

function fetchFooter() {
  fetch("/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#footer").innerHTML = data;
    });
}
