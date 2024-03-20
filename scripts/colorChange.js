//I decided to make the color change when price updates :)
const colors = [
  "#0f0",
  "#ff4500",
  "#1e90ff",
  "#ffd700",
  "#ff8c00",
  "#7cfc00",
  "#ff69b4",
];

function changeColor(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const colorIndex = Math.floor(Math.random() * colors.length);
    element.style.color = colors[colorIndex];
  }
}
