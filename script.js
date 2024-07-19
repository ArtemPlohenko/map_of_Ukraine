document.addEventListener("DOMContentLoaded", function () {
  const regions = document.querySelectorAll(".region");
  const tooltip = document.getElementById("tooltip");

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
  });
});
