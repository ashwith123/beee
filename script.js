const r1 = document.getElementById("r1");
const slider1 = document.getElementById("r1_slider");
const r2 = document.getElementById("r2");
const slider2 = document.getElementById("r2_slider");
const r3 = document.getElementById("r3");
const slider3 = document.getElementById("r3_slider");
const button = document.querySelector("button");
const resultDiv = document.getElementById("result");

slider1.addEventListener("input", function () {
  r1.value = slider1.value;
});

slider2.addEventListener("input", function () {
  r2.value = slider2.value;
});

slider3.addEventListener("input", function () {
  r3.value = slider3.value;
});

button.addEventListener("click", function () {
  const a = Number(r1.value) + Number(r2.value) + Number(r3.value);
  console.log(a);
  resultDiv.textContent = "Total Resistance: " + a;
});
