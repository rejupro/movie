export const getImagePath = (imageName) => {
  try {
    return new URL(`../assets/movie-covers/${imageName}`, import.meta.url).href;
  } catch (error) {
    console.error("Image not found:", imageName);
    return ""; // Return a default fallback or empty string for missing images
  }
};
