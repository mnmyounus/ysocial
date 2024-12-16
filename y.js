// Disable "Print Screen" key
document.addEventListener("keydown", (event) => {
  if (event.key === "PrintScreen" || event.code === "PrintScreen") {
    alert("Screenshots are not allowed on this page.");
    navigator.clipboard.writeText(""); // Clear clipboard
    event.preventDefault();
  }
  // Block key combinations (Ctrl+S, Ctrl+Shift+S, etc.)
  if (event.ctrlKey && (event.key === "s" || event.key === "S")) {
    alert("Saving or screenshots are disabled.");
    event.preventDefault();
  }
});

// Disable right-click menu
document.addEventListener("contextmenu", (event) => {
  alert("Right-click is disabled.");
  event.preventDefault();
});

// Blackout the screen when the window loses focus
window.addEventListener("blur", () => {
  document.body.style.visibility = "hidden";
});

// Restore visibility when the window regains focus
window.addEventListener("focus", () => {
  document.body.style.visibility = "visible";
});

// Prevent screen capturing via iframe click-jacking
if (window.top !== window.self) {
  document.body.innerHTML = "Access Denied.";
  document.body.style.color = "red";
  throw new Error("Screenshot protection: iframe embedding is disabled.");
}
