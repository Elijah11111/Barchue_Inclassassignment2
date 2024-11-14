// Select buttons and result sections
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const btnC = document.getElementById("btnC");

const resultA = document.getElementById("resultsA");
const resultB = document.getElementById("resultsB");
const resultC = document.getElementById("resultsC");

// Add event listeners to show the results
btnA.addEventListener("click", () => {
  resultA.style.display = "block";
});

btnB.addEventListener("click", () => {
  resultB.style.display = "block";
});

btnC.addEventListener("click", () => {
  resultC.style.display = "block";
});

// Hide the results when 'Hide Result' button is clicked
document.querySelectorAll(".hide-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.getAttribute("data-target"));
    target.style.display = "none";
  });
});
