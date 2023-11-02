// Get the button element
const button = document.getElementById("b-1");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Change the button's background color to white
  button.style.backgroundColor = "white";

  // Add an image to the middle of the button
  const image = document.createElement("img");
  image.src = "https://example.com/image.png";
  button.appendChild(image);
});