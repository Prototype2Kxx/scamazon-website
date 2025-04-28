window.addEventListener("load", () => {
  // Select the loader and main content elements
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  if (loadingScreen && mainContent) {
    // Ensure the main content is hidden initially
    mainContent.style.display = "none";

    // Keep the loader visible for 2 seconds, then start fade-out
    setTimeout(() => {
      loadingScreen.style.opacity = "0"; // Start fade-out effect
      loadingScreen.style.transition = "opacity 0.5s ease"; // Smooth transition for fade-out

      setTimeout(() => {
        loadingScreen.style.display = "none"; // Hide the loader completely
        mainContent.style.display = "block"; // Reveal the main content
      }, 500); // Allow fade-out transition (0.5s) to complete
    }, 2000); // Wait 2 seconds before starting fade-out
  } else {
    console.error("Element(s) not found: Check 'loading-screen' or 'main-content' IDs.");
  }
});