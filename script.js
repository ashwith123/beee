const r1 = document.getElementById("r1");
const slider1 = document.getElementById("r1_slider");
const r2 = document.getElementById("r2");
const slider2 = document.getElementById("r2_slider");
const r3 = document.getElementById("r3");
const slider3 = document.getElementById("r3_slider");

const voltage1 = document.getElementById("v1");
const sliderv1 = document.getElementById("v1_slider");

const voltage2 = document.getElementById("v2");
const sliderv2 = document.getElementById("v2_slider");

const button = document.querySelector("button");
const resultDiv = document.getElementById("result");

function syncSliderWithInput(slider, input) {
  slider.addEventListener("input", function () {
    input.value = slider.value;
  });
}

// Use the function for each pair of slider and input
syncSliderWithInput(slider1, r1);
syncSliderWithInput(slider2, r2);
syncSliderWithInput(slider3, r3);
syncSliderWithInput(sliderv1, voltage1);
syncSliderWithInput(sliderv2, voltage2);

button.addEventListener("click", function () {
  const R1 = Number(r1.value);
  const R2 = Number(r2.value);
  const R3 = Number(r3.value);
  const E1 = Number(voltage1.value);
  const E2 = Number(voltage2.value);

  // Calculate I3 using the formula
  const ans = E1 / (R1 + R3) + E2 / (R2 + R3);
  resultDiv.textContent =
    "Total current when 2 voltages source are present: " + ans;
});
