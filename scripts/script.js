// i decided to add a function to change the color of the price when it updates
document.addEventListener("DOMContentLoaded", function () {
  function updateValue(newValue) {
    document.getElementById(
      "bitcoinPrice"
    ).textContent = `Current Bitcoin Value: $ ${newValue}`;
    changeColor("bitcoinPrice");
  }

  // Function to fetch the current value of Bitcoin
  function getCurrentValue() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://blockchain.info/q/24hrprice");
    xhr.onload = function () {
      if (xhr.status === 200) {
        updateValue(xhr.responseText);
      } else {
        console.error("Failed to fetch Bitcoin value:", xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error("Request failed.");
    };
    xhr.send();
  }

  // Call function and set interval
  getCurrentValue();
  setInterval(getCurrentValue, 60000);

  //Event listener for refresh button
  document.getElementById("refreshButton").onclick = getCurrentValue;
});
