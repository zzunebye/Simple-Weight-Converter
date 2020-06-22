document.getElementById('output').style.visibility = 'hidden';
document.querySelector("#lbs-card").style.display = "none";


document.querySelector("input#lbsInput").addEventListener('input', (e) => {
  /* if (e.target.value) {
    document.getElementById('output').style.visibility = 'hidden';
    return;
  }*/
  document.getElementById('output').style.visibility = 'visible';

  const value = e.target.value;
  const metrics = document.querySelector("#select-metrics");

  switch (metrics.value) {
    case "Pound":
      document.querySelector("#gramsOutput").textContent = value / 0.0022046;
      document.querySelector("#kgOutput").textContent = value / 2.2046;
      document.querySelector("#ozOutput").textContent = value * 16;
      break;
    case "Kilogram":
      document.querySelector("#kg-card").style.display = "none";
      document.querySelector("#gramsOutput").textContent = value * 1000;
      document.querySelector("#lbsOutput").textContent = value * 2.2046;
      document.querySelector("#ozOutput").textContent = value * 35.274;
      break;
    case "Gram":
      document.querySelector("#grams-card").style.display = "none";
      document.querySelector("#ozOutput").textContent = value / 28.35;
      document.querySelector("#kgOutput").textContent = value * 0.001;
      document.querySelector("#lbsOutput").textContent = value / 454;
      break;
    case "Ounce":
      document.querySelector("#oz-card").style.display = "none";
      document.querySelector("#gramsOutput").textContent = value * 28.35;
      document.querySelector("#kgOutput").textContent = value / 35.274;
      document.querySelector("#lbsOutput").textContent = value / 16;
      break;
    default:
      break;
  }
});

document.querySelector("#select-metrics").addEventListener('input', e => {
  document.querySelector("#kg-card").style.display = "";
  document.querySelector("#lbs-card").style.display = "";
  document.querySelector("#grams-card").style.display = "";
  document.querySelector("#oz-card").style.display = "";
  switch (e.target.value) {
    case "Pound":
      document.querySelector("#lbs-card").style.display = "none";
      break;
    case "Kilogram":
      document.querySelector("#kg-card").style.display = "none";
      break;
    case "Gram":
      document.querySelector("#grams-card").style.display = "none";
      break;
    case "Ounce":
      document.querySelector("#oz-card").style.display = "none";
      break;
    default:
      break;
  }
  document.querySelector("input#lbsInput").value = "";
  document.getElementById('output').style.visibility = 'hidden';
});