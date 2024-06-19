// customize select location at about form
const locationSelect = document.getElementById("location");
const locationLabels = document.querySelectorAll(".location-label");
let locationRadio = document.querySelector("input[name=location]:checked");
const locationSummary = document.getElementById("location-result");
locationLabels.forEach((label) => {
  if (label.htmlFor === locationRadio.value) {
    locationSummary.innerHTML = label.innerHTML;
  }
});
if (locationRadio) {
  locationRadio.addEventListener("click", () => {
    document.querySelector("#location details").open = false;
  });
}
if (locationSelect) {
  locationSelect.onchange = function () {
    locationRadio = document.querySelector("input[name=location]:checked");
    locationLabels.forEach((label) => {
      if (label.htmlFor === locationRadio.value) {
        locationSummary.innerHTML = label.innerHTML;
      }
    });
    document.querySelector("#location details").open = false;
  };
}

const collapseAside = document.getElementById("collapseAsideAcount");
if (collapseAside) {
  window.innerWidth > 767
    ? collapseAside.classList.add("show")
    : collapseAside.classList.remove("show");
}
