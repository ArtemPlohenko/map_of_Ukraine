document.addEventListener("DOMContentLoaded", function () {
  const regions = document.querySelectorAll(".region");
  const tooltip = document.getElementById("tooltip");
  const popupOverlay = document.getElementById("popup-overlay");
  const popup = document.getElementById("popup");

  regions.forEach((region) => {
    region.addEventListener("mouseenter", function (e) {
      const name = this.getAttribute("data-name");
      const number = this.getAttribute("data-number");
      tooltip.textContent = `${name} (Number: ${number})`;
      tooltip.classList.remove("hidden");
    });

    region.addEventListener("mouseleave", function (e) {
      tooltip.classList.add("hidden");
    });

    // region.addEventListener("mousemove", function (e) {
    //   tooltip.style.left = `${e.pageX + 10}px`;
    //   tooltip.style.top = `${e.pageY + 10}px`;
    // });

    region.addEventListener("click", function (e) {
      const name = this.getAttribute("data-name");
      const number = this.getAttribute("data-number");
      const popupContent = `<h3>${name}</h3><p>Number: ${number}</p>`;
      popup.innerHTML = popupContent;
      popupOverlay.style.display = "flex";
    });
  });

  popupOverlay.addEventListener("click", function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
});
